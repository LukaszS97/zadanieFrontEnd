import { Component, OnInit, ViewChild } from '@angular/core';
import { Person } from '../models/person';
import { HttpService } from '../http.service';
import { MatSort, MatSortable } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  personList;
  columnsName = ['id', 'name', 'username', 'email', 'phone', 'website']; // aby usunąć kolumnę w widoku, należy usunąć rekord tablicy
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getPresonList().subscribe(people => {
      this.personList = new MatTableDataSource(people);
      this.personList.sort = this.sort;
    });
  }
}
