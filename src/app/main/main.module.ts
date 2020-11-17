import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { NbMenuModule } from '@nebular/theme';
import { ThemeModule } from 'app/@theme/theme.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [MainComponent, DashboardComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    NbMenuModule,
    ThemeModule,
  ]
})
export class MainModule { }
