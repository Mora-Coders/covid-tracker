import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

    this._auth.signFailed$.subscribe(state => {
      this.showMessages.error = state;
      if(state){
        this.submitted = false;
        this.showMessages.success = false;
        this.showMessages.error = true;
        this.errors.pop();
        this.errors.push("Invalid credentials");
      }
    });

  }

  ngOnInit(): void {
  }

  login(){
    this.submitted = true;
    console.log(this.user.email);
    this._auth.signIn(this.user.email, this.user.password);
  }

}
