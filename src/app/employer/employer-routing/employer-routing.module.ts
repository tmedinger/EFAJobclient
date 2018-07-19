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
>>>>>>> adbc3a605ea812171dc8b4440e3a0263f8ec0767

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class EmployerRoutingModule { }
