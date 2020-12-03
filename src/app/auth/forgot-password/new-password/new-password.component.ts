import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbAuthService, NbRequestPasswordComponent, NB_AUTH_OPTIONS } from '@nebular/auth';
import { AuthService } from 'app/service/auth.service';

@Component({
  selector: 'ngx-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent extends NbRequestPasswordComponent {

  username: string;

  constructor(service: NbAuthService, @Inject(NB_AUTH_OPTIONS) options:{}, cd: ChangeDetectorRef, router: Router, private _auth: AuthService, private route: ActivatedRoute){
    super(service, options, cd, router);

    this._auth.passwordResetRequestedUser$.subscribe(
      data => {
        this.username = data;
      }
    );

  }

  ngOnInit(): void {
  }

  requestPass(){
    this.submitted = true;
    this._auth.resetPassword(this.username, this.user.password, this.user.otp)
                .then(data => {
                  this.submitted = false;
                  this.showMessages.error = false;
                  this.router.navigate(['../../auth'], { relativeTo: this.route });
                })
                .catch(err => {
                  this.submitted = false;
                  this.showMessages.success = false;
                  this.showMessages.error = true;
                  this.errors.pop();
                  console.log(err);
                  if(err.name == "UserNotFoundException")
                  {
                    this.errors.push("Not registered user");
                  }
                  else if(err.name == "UserNotConfirmedException")
                  {
                    this.errors.push("Not confirmed user");
                  }
                  else{
                    this.errors.push("Contact admin. Error: " + err.name);
                  }
                });
  }

}
