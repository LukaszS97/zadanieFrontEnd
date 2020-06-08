import { Component, OnInit, Input, Output } from '@angular/core';
import { Person } from '../models/person';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.css']
})
export class EditDataComponent implements OnInit {

  editedData: Person = new Person();
  hideShow = false;
  button = 'Pokaż';
  editOff = false; // pozwala/blokuje możliwość edycji danych
  @Input()
  people;

  constructor() { }

  ngOnInit() {
  }

  editData() {
    this.people.filteredData[this.editedData.id - 1].id = this.editedData.id;
    this.people.filteredData[this.editedData.id - 1].name = this.editedData.name;
    this.people.filteredData[this.editedData.id - 1].username = this.editedData.username;
    this.people.filteredData[this.editedData.id - 1].email = this.editedData.email;
    this.people.filteredData[this.editedData.id - 1].phone = this.editedData.phone;
    this.people.filteredData[this.editedData.id - 1].website = this.editedData.website;
    delete this.editedData;
    this.editedData = new Person();
    console.log(this.people.filteredData);

  }

  showHide() {
    this.hideShow = !this.hideShow;
    if (this.hideShow === true) {
      this.button = 'Ukryj';
    } else { this.button = 'Pokaż'; }
  }
}
