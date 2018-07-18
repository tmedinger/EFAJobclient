import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
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
import { ReactiveFormsModule } from '../../../node_modules/@angular/forms';
import { JobDetailsComponent } from './job-details/job-details.component';

import { EmployerLoginComponent } from '../auth/employer-login/employer-login.component';
import { StudentLoginComponent } from '../auth/student-login/student-login.component';
import { EmployerSignupComponent } from '../auth/employer-signup/employer-signup.component';
import { StudentSignupComponent } from '../auth/student-signup/student-signup.component';
import { SnippetPipe } from './snippet.pipe';

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
    JobDetailsComponent]
})
export class SharedModule { }
