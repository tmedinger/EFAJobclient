import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { EmployerTableDataSource } from './employer-table-datasource';

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

  ngOnInit() {
    this.dataSource = new EmployerTableDataSource(this.paginator, this.sort);
  }
}
