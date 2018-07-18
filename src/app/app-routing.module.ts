import { NgModule } from '@angular/core';
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
    {path: '**', component: PageNotFoundComponent}    
];

@NgModule({
    imports: [/*RouterModule.forRoot(routes)*/],
    exports: [RouterModule]
})
export class AppRoutingModule { }