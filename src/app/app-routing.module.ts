import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { Route, RouterModule, Routes } from '@angular/router';
import { StudentSignupComponent } from './auth/student-signup/student-signup.component';

import { AuthComponent } from './auth/auth.component';
import { EmployerDashboardComponent } from './employer/employer-dashboard/employer-dashboard.component';
import { JobDetailsComponent } from './shared/job-details/job-details.component';
import { JobsAppliedComponent } from './student/profile/jobs-applied/jobs-applied.component';
import { LayoutComponent } from './ui/layout/layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const routes: Route = [  
    {path: '', redirectTo: 'auth', pathMatch: 'full'},
    {path: 'auth', component: AuthComponent},
    {path: 'employerdashboard', component: EmployerDashboardComponent},
    {path: 'jobdetails', component: JobDetailsComponent },
    {path: 'jobsapplied', component: JobsAppliedComponent},
=======

import { EmployerSignupComponent } from './auth/employer-signup/employer-signup.component';

import { SharedRoutingModule } from './shared/shared-routing.module';
import { Route, Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { EmployerDashboardComponent } from './employer/employer-dashboard/employer-dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const routes: Routes = [
    {path: '', redirectTo: '/studentlogin', pathMatch: 'full'},
    {path: 'auth', component: AuthComponent},
>>>>>>> 92df38c6542be93cb038fdf541c38a3f877cd8d4
    {path: '**', component: PageNotFoundComponent}    
];

@NgModule({
<<<<<<< HEAD
    imports: [/*RouterModule.forRoot(routes)*/],
=======
    imports: [RouterModule.forRoot(routes), SharedRoutingModule],
>>>>>>> 92df38c6542be93cb038fdf541c38a3f877cd8d4
    exports: [RouterModule]
})
export class AppRoutingModule { }