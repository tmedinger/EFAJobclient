import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialogModule, MatDialog, MatCard, MatCardActions,MatCardHeader, MatCardAvatar, MatCardContent  } from '@angular/material';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {
  
  constructor(
<<<<<<< HEAD
    public jobName:string,
    public companyName:string,
    public jobDescription:string,
    public salary: number,
    public experience: string,
    public jobType: string,
    public datePosted: string, // TEMPORARY: HTML WILL CONTAIN {{datePosted | date:"MM/dd/yyyy"}}
    public listOfApplicants: string[],
    public apply:boolean,
    public create:string,
    public updated: string,
=======
    // public jobName: string,
    // public companyName: string,
    // public jobDescription:string,
    // public salary: number,
    // public experience: string,
    // public jobType: string,
    // public datePosted: string,
    // public listOfApplicants: string [],
    // public apply: boolean,
    // public create: string,
    // public updated: string,
>>>>>>> da063e36b0af09ff03df6f0ebe1ca8878adb2738
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  applyToJob(): void {
    const applyAlert = this.dialog.open(ApplyConfirmAlert, {
      height: "200px",
      width: "250px"
    });
  }

}




// Component for confirmation that job application has been sent

@Component({
  selector: 'apply-confirm-alert',
  templateUrl: 'apply-confirm-alert.html',
  styleUrls: ['./apply-confirm-alert.css']
})
export class ApplyConfirmAlert {

  constructor(public applyAlert: MatDialogRef<ApplyConfirmAlert>) {}
  
  onOkClick(): void {
    this.applyAlert.close();
  }
  
}
