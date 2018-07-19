import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialogModule, MatDialog, MatCard, MatCardActions,MatCardHeader, MatCardAvatar, MatCardContent  } from '@angular/material';

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
<<<<<<< HEAD
    public create:boolean,
    public update: boolean,
=======
    public create: string,
    public updated: string,
>>>>>>> 13348056054b6c2b44c43e9c84c0b61afa1ef32e
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
