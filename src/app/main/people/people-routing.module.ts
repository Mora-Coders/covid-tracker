import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPeopleComponent } from './add-people/add-people.component';
import { PeopleComponent } from './people.component';
import { ViewPeopleComponent } from './view-people/view-people.component';

const routes: Routes = [
  {
    path: '',
    component: PeopleComponent,
    children: [
      {
        path: 'add',
        component: AddPeopleComponent,
      },
      {
        path: 'list',
        component: ViewPeopleComponent, 
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
