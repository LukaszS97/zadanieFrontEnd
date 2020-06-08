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
    this.people.filteredData[this.editedData.id - 1] = this.editedData;
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
