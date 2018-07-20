import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { StudentLoginComponent } from '../../auth/student-login/student-login.component';
import { StudentSignupComponent } from '../../auth//student-signup/student-signup.component';
import { StudentDashboardComponent } from '../student-dashboard/student-dashboard.component';

const routes: Routes = [
  { path: 'studentlogin', component: StudentLoginComponent},
  { path: 'studentsignup', component: StudentSignupComponent},
  { path: 'studentdashboard', component: StudentDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
