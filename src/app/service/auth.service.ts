import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, Hub } from 'aws-amplify';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';
import { catchError, map } from 'rxjs/operators';

export interface AuthState {
  isLoggedIn: boolean;
  username: string | null;
  name: string | null;
  email: string | null;
}

const initialAuthState = {
  isLoggedIn: false,
  username: null,
  name: null,
  email: null
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly _authState = new BehaviorSubject<AuthState>(
    initialAuthState
  );

  private readonly _signedIn = new BehaviorSubject<boolean>(false);

  private readonly _signFailed = new BehaviorSubject<boolean>(false);

  private readonly _profileSetupFailed = new BehaviorSubject<boolean>(false);

  /** SignIn Failure status as an Observable */
  readonly signFailed$ = this._signFailed.asObservable();

  /** Profile Setup failed status as an Observable */
  readonly profileSetupFailed$ = this._profileSetupFailed.asObservable();

  /** SignIn status as an Observable */
  readonly signedIn$ = this._signedIn.asObservable();

  /** SignIn user details as an Observable */
  readonly authDetails$ = this._authState.asObservable();

  constructor(private router: Router) {

    let profileSetupFailed: boolean = false;

    this.profileSetupFailed$.subscribe(state => {
      profileSetupFailed = state;
    });

   } 
  
  /** Setup profile in the first login */
  async setupProfile(username: string, password: string, name: string, newPassword: string, mobile: string) {
    Auth.signIn(username, password)
      .then(user => {
          if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
              const { requiredAttributes } = user.challengeParam;
              Auth.completeNewPassword(
                  user,
                  newPassword,
                  {
                    name: name,
                    email: username,
                    phone_number: mobile
                  }
              ).then(user => {
                  console.log(user);
                  this.setUser(user);
                  this._signedIn.next(true);
                  this._signFailed.next(false);
                  this.router.navigate(['main/dashboard']);
              }).catch(e => {
                this._profileSetupFailed.next(true);
                console.log(e);
              });
          } else {
              this._profileSetupFailed.next(true);
          }
      }).catch(e => {
          console.log(e);
          this._profileSetupFailed.next(true);
      });
  }

  /** Sign in function */
  async signIn(username: string, password: string) {
    Auth.signIn(username, password)
      .then(user => {
          if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
            this.router.navigate(['auth/profile-setup']);
          } else {
            this._profileSetupFailed.next(false);
            this.setUser(user);
            this._signedIn.next(true);
            this._signFailed.next(false);
            this.router.navigate(['main/dashboard']);
          }
      }).catch(e => {
        console.log('error signing in', e);
        this._signFailed.next(true);
      });
  } 

  /** Get authenticat state */
  public isAuthenticated(): Observable<boolean> {
    return fromPromise(Auth.currentAuthenticatedUser())
      .pipe(
        map(result => {
          this._signedIn.next(true);
          return true;
        }),
        catchError(error => {
          this._signedIn.next(false);
          return of(false);
        })
      );
  }

  /** Get authenticate user */
  public getAuthenticatedUser(): Observable<any>{
    return fromPromise(Auth.currentAuthenticatedUser())
      .pipe(
        map(result => {
          return result
        }),
        catchError(error => {
          throw new Error(error);
        })
      );
  }

  /** Sign out user */
  async  signOut() {
    try {
        await Auth.signOut();
        this.router.navigate(['auth/login']);
    } catch (error) {
        console.log('error signing out: ', error);
    }
  }

  /** Sets up the logged in user */
  private setUser(user: any) {
    if (!user) {
      return;
    }

    console.log(user);

    const {
      attributes: {name, email},
      username
    } = user;

    this._authState.next({ isLoggedIn: true, username, name, email });
  }

}
