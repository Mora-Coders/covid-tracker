import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-add-people',
  templateUrl: './add-people.component.html',
  styleUrls: ['./add-people.component.scss']
})
export class AddPeopleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  files: any = [];

  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      console.log("Available");
      const element = event[index];
      this.files.push(element.name)
    }  
  }
  deleteAttachment(index) {
    this.files.splice(index, 1)
  }

}
