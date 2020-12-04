import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';
import { ForgotPasswordComponent } from './forgot-password.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NbAlertModule, NbButtonModule, NbCheckboxModule, NbInputModule, NbSpinnerModule } from '@nebular/theme';
import { NbAuthModule } from '@nebular/auth';


@NgModule({
  declarations: [ForgotPasswordComponent, NewPasswordComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NbAuthModule,
    ForgotPasswordRoutingModule,
    NbSpinnerModule
  ]
})
export class ForgotPasswordModule { }
