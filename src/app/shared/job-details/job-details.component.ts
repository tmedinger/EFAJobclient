import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {
  


  constructor(
    public jobName:string,
    public companyName:string,
    public jobDescription:string,
    public salary: number,
    public experience: string,
    public jobType: string,
    public datePosted: string,
    public listOfApplicants: string[],
    public apply:boolean,
    public create:any,
    public updated:any
  ) { }

  ngOnInit() {
  }

}
