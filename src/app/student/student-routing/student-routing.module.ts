import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { StudentLoginComponent } from '../../auth/student-login/student-login.component';
import { StudentSignupComponent } from '../../auth//student-signup/student-signup.component';
import { StudentDashboardComponent } from '../student-dashboard/student-dashboard/student-dashboard.component';
import { JobDetailsComponent } from '../../shared/job-details/job-details.component';
import { ProfileFormComponent } from '../profile/profile-form/profile-form.component';

const routes: Routes = [
  { path: 'studentlogin', component: StudentLoginComponent},
  { path: 'studentsignup', component: StudentSignupComponent},
  { path: 'studentdashboard', component: StudentDashboardComponent},
  { path: 'jobdetails', component: JobDetailsComponent},
  { path: 'studentform', component: ProfileFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
