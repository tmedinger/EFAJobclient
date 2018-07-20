import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { EmployerTableDataSource } from './employer-table-datasource';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employer-table',
  templateUrl: './employer-table.component.html',
  styleUrls: ['./employer-table.component.css']
})
export class EmployerTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: EmployerTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['jobName', 'salary', 'datePosted', "jobType", 'studentsApplied'];

  constructor(private http: HttpClient) {

  }

  // Bring in persisting data to the employer-dashboard table so it is pulling from the data base.

  // TESTING: 
  // Perform a unit test where you build out a test in the spec file and utilize Jasmine to perform the test. Go here: https://angular.io/guide/testing to walk through testing.

  // Unit testing will be required for both orange and red ticket items.

  buildEmployerTable() {
    this.http.get("LINK TO API")
      .subscribe((res) => {
        console.log(res)
      })
  }

  ngOnInit() {
    this.dataSource = new EmployerTableDataSource(this.paginator, this.sort);
  }
}
