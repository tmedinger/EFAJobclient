import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { StudentLoginComponent } from '../../auth/student-login/student-login.component';
import { StudentSignupComponent } from '../../auth//student-signup/student-signup.component';
import { StudentDashboardComponent } from '../student-dashboard/student-dashboard/student-dashboard.component';
import { JobDetailsComponent } from '../../shared/job-details/job-details.component';

const routes: Routes = [
  { path: 'studentlogin', component: StudentLoginComponent},
  { path: 'studentsignup', component: StudentSignupComponent},
  { path: 'studentdashboard', component: StudentDashboardComponent},
  { path: 'jobdetails', component: JobDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
