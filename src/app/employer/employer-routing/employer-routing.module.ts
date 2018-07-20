import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { EmployerLoginComponent } from '../../auth/employer-login/employer-login.component';
import { EmployerSignupComponent } from '../../auth//employer-signup/employer-signup.component';

const routes: Routes = [
  { path: 'employerlogin', component: EmployerLoginComponent},
  { path: 'employersignup', component: EmployerSignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class EmployerRoutingModule { }
