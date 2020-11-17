import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleComponent } from './people.component';
import { AddPeopleComponent } from './add-people/add-people.component';
import { ViewPeopleComponent } from './view-people/view-people.component';


@NgModule({
  declarations: [PeopleComponent, AddPeopleComponent, ViewPeopleComponent],
  imports: [
    CommonModule,
    PeopleRoutingModule
  ]
})
export class PeopleModule { }
