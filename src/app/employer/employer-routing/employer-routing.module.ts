import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import {JobDetailsComponent} from '../../shared/job-details/job-details.component'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' }

=======
import { RouterModule, Routes } from '@angular/router';

import { EmployerLoginComponent } from '../../auth/employer-login/employer-login.component';
import { EmployerSignupComponent } from '../../auth//employer-signup/employer-signup.component';

const routes: Routes = [
  { path: 'employerlogin', component: EmployerLoginComponent},
  { path: 'employersignup', component: EmployerSignupComponent}
];
>>>>>>> 62ae40cfdf753d3ef1630e5e7c0ec3007dcf3724

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class EmployerRoutingModule { }
