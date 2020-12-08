import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleComponent } from './people.component';
import { AddPeopleComponent } from './add-people/add-people.component';
import { ViewPeopleComponent } from './view-people/view-people.component';
import { DirectiveModule } from 'app/directive/directive.module';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbIconModule } from '@nebular/theme';


@NgModule({
  declarations: [PeopleComponent, AddPeopleComponent, ViewPeopleComponent],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    DirectiveModule,
    NbIconModule,
    NbEvaIconsModule
  ]
})
export class PeopleModule { }
