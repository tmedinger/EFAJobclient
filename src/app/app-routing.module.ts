import { NgModule } from '@angular/core';
import { StudentSignupComponent } from './auth/student-signup/student-signup.component'
// import { AuthComponent } from './auth/auth.component';
import { Route, Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { EmployerDashboardComponent } from './employer/employer-dashboard/employer-dashboard.component';
import { NotificationComponent } from './employer/employer-dashboard/notification/notification.component';
import { JobDetailsComponent } from './shared/job-details/job-details.component';
import { JobsAppliedComponent } from './student/profile/jobs-applied/jobs-applied.component';
import { NotificationsComponent } from './student/student-dashboard/notifications/notifications.component';
import { FooterComponent } from './ui/footer/footer.component';
import { LayoutComponent } from './ui/layout/layout.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const routes: Route[] = [
    {path: '', redirectTo: 'auth', pathMatch: 'full'},
    {path: 'auth', component: AuthComponent},
    {path: 'employerdashboard', component: EmployerDashboardComponent},
    {path: 'notification', component: NotificationComponent},
    {path: 'jobdetails', component: JobDetailsComponent },
    {path: 'jobsapplied', component: JobsAppliedComponent},
    {path: 'notifications', component: NotificationsComponent},
    {path: 'footer', component: FooterComponent},
    {path: 'layout', component: LayoutComponent},
    {path: 'navbar', component: NavbarComponent},
    {path: '**', component: PageNotFoundComponent}    
];

@NgModule({
    imports: [/*RouterModule.forRoot(routes)*/],
    exports: [RouterModule]
})
export class AppRoutingModule { }