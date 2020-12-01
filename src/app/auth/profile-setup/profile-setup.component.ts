import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService, NbRegisterComponent, NB_AUTH_OPTIONS } from '@nebular/auth';
import { AuthService } from 'app/service/auth.service';

@Component({
  selector: 'ngx-profile-setup',
  templateUrl: './profile-setup.component.html',
  styleUrls: ['./profile-setup.component.scss']
})
export class ProfileSetupComponent extends NbRegisterComponent {

  constructor(service: NbAuthService, @Inject(NB_AUTH_OPTIONS) options:{}, cd: ChangeDetectorRef, router: Router, private _auth: AuthService){
    super(service, options, cd, router);

    console.log(this.submitted);

    this._auth.profileSetupFailed$.subscribe(state => {
      this.showMessages.error = state;
      if(state){
        this.submitted = false;
        this.showMessages.success = false;
        this.showMessages.error = true;
        this.errors.pop();
        this.errors.push("Update Failed");
      }
    });

  }

  ngOnInit(): void {
  }

  submit(){
    this.submitted = true;
    this._auth.setupProfile(this.user.email, this.user.password, this.user.fullName, this.user.newPassword, this.user.mobile);
  }

}
