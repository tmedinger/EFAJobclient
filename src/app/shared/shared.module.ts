import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from '../../../node_modules/@angular/forms';
import { JobDetailsComponent, ApplyConfirmAlert } from './job-details/job-details.component';
import { 
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatButtonToggleModule,
        MatDialogModule,
        MatFormFieldModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatPaginatorModule,
        MatRadioModule,
        MatSidenavModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatTableModule,
        MatToolbarModule,
        MatTooltipModule, 
      } from "@angular/material";
import { FormsModule } from '@angular/forms';
        
import { FormBuilder, FormGroup } from '@angular/forms';

import { EmployerLoginComponent } from '../auth/employer-login/employer-login.component';
import { StudentLoginComponent } from '../auth/student-login/student-login.component';
import { EmployerSignupComponent } from '../auth/employer-signup/employer-signup.component';
import { StudentSignupComponent } from '../auth/student-signup/student-signup.component';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatPaginatorModule,
    MatRadioModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
  ],

  exports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatPaginatorModule,
    MatRadioModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  declarations: [ 
    ApplyConfirmAlert,
    JobDetailsComponent,
    ApplyConfirmAlert,
    
  ],

  entryComponents: [ApplyConfirmAlert]
})
export class SharedModule { }
