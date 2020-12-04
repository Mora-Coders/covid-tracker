import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, Hub } from 'aws-amplify';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
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

  private readonly _passwordResetRequestedUser = new BehaviorSubject<string>(null);

  /** SignIn Failure status as an Observable */
  readonly signFailed$ = this._signFailed.asObservable();

  /** Profile Setup failed status as an Observable */
  readonly profileSetupFailed$ = this._profileSetupFailed.asObservable();

  /** SignIn status as an Observable */
  readonly signedIn$ = this._signedIn.asObservable();

  /** SignIn user details as an Observable */
  readonly authDetails$ = this._authState.asObservable();

  /** Gets password reset requested user as an Observable */
  readonly passwordResetRequestedUser$ = this._passwordResetRequestedUser.asObservable();

  constructor(private router: Router) {

    let profileSetupFailed: boolean = false;

    this.profileSetupFailed$.subscribe(state => {
      profileSetupFailed = state;
    });

   } 
  
  /** Setup profile in the first login */
  async setupProfile(username: string, password: string, name: string, newPassword: string, mobile: string): Promise<any> {
    return Auth.signIn(username, password)
      .then(user => {
          if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
              const { requiredAttributes } = user.challengeParam;
              console.log(username);
              console.log(password);
              console.log(name);
              console.log(newPassword);
              console.log(mobile);
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
  signIn(username: string, password: string): Observable<any>{
    return from(Auth.signIn(username, password))
      .pipe(map(response => response));
  }

  /** Get authenticat state */
  public isAuthenticated(): Observable<boolean> {
    return fromPromise(Auth.currentAuthenticatedUser())
      .pipe(
        map(result => {
          console.log(result);
          this._signedIn.next(true);
          return true;
        }),
        catchError(error => {
          console.log(error);
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

  /** Send otp to reset password */
  public sendOtp(username: string): Promise<any>{
    return Auth.forgotPassword(username)
            .then(data => {
              console.log(data);
              this._passwordResetRequestedUser.next(username);
              return data
            });
  }

  /** Resets password */
  public resetPassword(username: string, newPassword: string, otp: string): Promise<any>{
     // Collect confirmation code and new password, then
    return Auth.forgotPasswordSubmit(username, otp, newPassword)
        .then(data => {return data});
  }

  /** Sign out user */
  async  signOut() {
    try {
        await Auth.signOut();
        this.setSignedInStatus(false);
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

    let name = "";
    let username = "";
    let email = ""; 

    if(user.attributes != null){
      name = user.attributes.name;
      username = user.username;
      email = user.attributes.email;
    }
    if(user.challengeParam != null){
      name = user.challengeParam.userAttributes.name;
      username = user.username;
      email = user.challengeParam.userAttributes.email;
    }


    this._authState.next({ isLoggedIn: true, username, name, email });
  }

  updateLoginStatus(user){
    this.setUser(user);
  }

  setSignedInStatus(status){
    this._signedIn.next(status);
  }

  updateProfileSetupStatus(status){
    this._profileSetupFailed.next(status);
  }

}
