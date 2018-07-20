import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialogModule, MatDialog, MatCardModule, MatButtonModule } from '@angular/material';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {
  
  
  constructor(public dialog: MatDialog) { }

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
