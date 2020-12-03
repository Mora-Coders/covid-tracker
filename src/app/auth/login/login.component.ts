import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NbAuthService, NbLoginComponent, NB_AUTH_OPTIONS } from '@nebular/auth';
import { AuthService } from 'app/service/auth.service';
import { Auth, Hub } from 'aws-amplify';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends NbLoginComponent {

  constructor(service: NbAuthService,@Inject(NB_AUTH_OPTIONS) options:{}, cd: ChangeDetectorRef, router: Router, private _auth: AuthService){
    super(service, options, cd, router);
    this.showMessages.success = false;
    this.showMessages.error = false;
  }

  ngOnInit(): void {
  }

  login(){
    this.submitted = true;
    console.log(this.user.email);
    //this._auth.signIn(this.user.email, this.user.password);
    this._auth.tempSignIn(this.user.email, this.user.password)
      .subscribe(this.observer);
  }

  observer = {
    next: data => {
      console.log(data);
      if (data.challengeName === 'NEW_PASSWORD_REQUIRED') {
        this.router.navigate(['auth/profile-setup']);
      } else {
        this._auth.updateLoginStatus(data);
        this._auth.setSignedInStatus(true);
        this.submitted = false;
        this.router.navigate(['main/dashboard']);
      }
    },
    error: err => {
      console.log(err);
      this.submitted = false;
      this.showMessages.success = false;
      this.showMessages.error = true;
      this.errors.pop();
      this.errors.push("Invalid credentials");
    }
  }

}
