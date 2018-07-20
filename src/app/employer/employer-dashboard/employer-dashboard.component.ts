import { Component, OnInit } from '@angular/core';
import {JobDetailsComponent} from '../../shared/job-details/job-details.component';

@Component({
  selector: 'app-employer-dashboard',
  templateUrl: './employer-dashboard.component.html',
  styleUrls: ['./employer-dashboard.component.css']
})
export class EmployerDashboardComponent implements OnInit {

  date: Date = new Date(); // TEMPORARY: THIS WILL COME FROM THE DATABASE {{date | date:"MM/dd/yyyy"}}
  
  constructor() { }

  ngOnInit() {
  }

}
