import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialogModule, MatDialog, MatCardModule, MatButtonModule, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {
  
  
  constructor(public dialog: MatDialog,
              public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  applyToJob(): void {
    const applyAlert = this.dialog.open(ApplyConfirmAlert, {
      height: "200px",
      width: "250px"
    });
  }

// function to open snackbar notification for employer that job has been applied to once student hits apply button.  Was not finished implementing.  Function needs to be called here when student clicks apply button, but snackbar needs to show on employer dashboard.  Function may need to  be moved to employer dashboard component, don't know, didn't get that far before project was pulled.
  openSnackBar(message: string) {
    this.snackBar.open("New application submitted to posted job.", "", {
      duration: 3000, verticalPosition: "top"
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
