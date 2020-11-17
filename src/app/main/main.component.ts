import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from './main-menu';

@Component({
  selector: 'ngx-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  menu = MENU_ITEMS;

  constructor() { }

  ngOnInit(): void {
  }

}
