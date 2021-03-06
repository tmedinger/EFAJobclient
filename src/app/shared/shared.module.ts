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
        MatTableModule,
        MatToolbarModule,
        MatTooltipModule, } from "@angular/material";
import {FormBuilder, FormGroup} from '@angular/forms';

import { EmployerLoginComponent } from '../auth/employer-login/employer-login.component';
import { StudentLoginComponent } from '../auth/student-login/student-login.component';
import { EmployerSignupComponent } from '../auth/employer-signup/employer-signup.component';
import { StudentSignupComponent } from '../auth/student-signup/student-signup.component';
import { SnippetPipe } from './snippet.pipe';
import { JobsEditComponent } from '../employer/employer-dashboard/jobs-edit/jobs-edit.component'

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
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    ReactiveFormsModule,
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
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    StudentSignupComponent,
    EmployerSignupComponent,
    StudentLoginComponent,
    EmployerLoginComponent,

  ],
  declarations: [
    SnippetPipe,
    JobDetailsComponent,
    StudentSignupComponent,
    EmployerSignupComponent,
    StudentLoginComponent,
    EmployerLoginComponent,
    SnippetPipe,
    ApplyConfirmAlert,
    JobsEditComponent
    
  ],

  entryComponents: [ApplyConfirmAlert]
})
export class SharedModule { }
