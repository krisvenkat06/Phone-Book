import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactshome',
  templateUrl: './contactshome.component.html',
  styleUrls: ['./contactshome.component.css']
})
export class ContactshomeComponent implements OnInit {
  public contacts: any = [];
  constructor() { }

  ngOnInit() {
    this.contacts = [
      { fname: 'Venki', lname: 'Kuduva', contact: '1234' },
      { fname: 'Vaish', lname: 'Kuduva', contact: '5678' },
    ];

  }

}
