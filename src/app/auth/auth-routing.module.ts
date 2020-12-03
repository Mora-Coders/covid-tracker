import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NbAuthComponent } from '@nebular/auth';
import { LoginComponent } from './login/login.component';
import { ProfileSetupComponent } from './profile-setup/profile-setup.component';

const routes: Routes = [
  {
    path: '',
    component: NbAuthComponent,  // <---
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'profile-setup',
        component: ProfileSetupComponent,
      },
      {
        path: 'forgot-password',
        loadChildren: () => import('./forgot-password/forgot-password.module')
          .then(m => m.ForgotPasswordModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
