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
        // MatFormFieldModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatPaginatorModule,
        MatRadioModule,
        MatSidenavModule,
        MatSlideToggleModule,
        MatSnackBar,
        MatTableModule,
        MatToolbarModule,
        MatTooltipModule, 
        MatSnackBarModule,} from "@angular/material";
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
        
import { FormBuilder, FormGroup } from '@angular/forms';

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
    MatSnackBarModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    ReactiveFormsModule,
    FormsModule,

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
    StudentSignupComponent,
    EmployerSignupComponent,
    StudentLoginComponent,
    EmployerLoginComponent,
    JobDetailsComponent,
    ApplyConfirmAlert,
 
  ],
  declarations: [
    SnippetPipe,
    JobDetailsComponent,
    StudentSignupComponent,
    EmployerSignupComponent,
    StudentLoginComponent,
    EmployerLoginComponent,
    SnippetPipe,
    JobsEditComponent,
    ApplyConfirmAlert,
    
  ],

  entryComponents: [ApplyConfirmAlert]
})
export class SharedModule { }
