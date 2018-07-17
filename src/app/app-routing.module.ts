import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentLoginComponent } from './auth/student-login/student-login.component';
import { EmployerLoginComponent } from './auth/employer-login/employer-login.component'

const routes: Routes = [
    { path: '', redirectTo: '/student-login', pathMatch: 'full' },
    { path: 'student-login', component: StudentLoginComponent },
    { path: 'employer-login', component: EmployerLoginComponent },
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }