import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { UserData, createNewUser } from '../activity-list/activity-list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  myControl: FormControl = new FormControl();

  dataSource: MatTableDataSource<UserData>;

  filteredOptions: Observable<string[]>;

  ngOnInit() {
    let options: string[] = [];
    for(let i = 0; i < this.dataSource.filteredData.length; i++) {
      options[i] = this.dataSource.filteredData[i].name;
    }
    this.filteredOptions = Observable.of(options);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue;
    let options: string[] = [];
    for(let i = 0; i < this.dataSource.filteredData.length; i++) {
      options[i] = this.dataSource.filteredData[i].name;
    }
    this.filteredOptions = (typeof options !== 'undefined' && options.length > 0) ? Observable.of(options) : Observable.of(['Usuario no encontrado...']);
  }

  constructor(private router: Router) {
    // Create 100 users
    const users: UserData[] = [];
    for (let i = 1; i <= 100; i++) { users.push(createNewUser(i)); }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

}
