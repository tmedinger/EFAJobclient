import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from '../../../node_modules/@angular/forms';
import { ApplyConfirmAlert } from './job-details/job-details.component';
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
        MatTooltipModule,
      } from "@angular/material";
import { EmployerLoginComponent } from '../auth/employer-login/employer-login.component';
import { StudentLoginComponent } from '../auth/student-login/student-login.component';
import { EmployerSignupComponent } from '../auth/employer-signup/employer-signup.component';
import { StudentSignupComponent } from '../auth/student-signup/student-signup.component';
import { StudentModule } from '../student/student.module';
import { EmployerModule } from '../employer/employer.module';
import { AuthComponent } from '../auth/auth.component';

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
    StudentModule,
    EmployerModule
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
    StudentSignupComponent,
    EmployerSignupComponent,
    StudentLoginComponent,
    EmployerLoginComponent, 
    ApplyConfirmAlert,
    AuthComponent
    
  ],

  entryComponents: [ApplyConfirmAlert]
})
export class SharedModule { }
