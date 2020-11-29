import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, Hub } from 'aws-amplify';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

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

  constructor(private router: Router) {

    let profileSetupFailed: boolean = false;

    this.profileSetupFailed$.subscribe(state => {
      profileSetupFailed = state;
    });

   } 
  
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

  async  signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
  }

  private setUser(user: any) {
    if (!user) {
      return;
    }

    console.log(user);

    const {
      attributes: name, email,
      username
    } = user;

    this._authState.next({ isLoggedIn: true, username, name, email });
  }

}
