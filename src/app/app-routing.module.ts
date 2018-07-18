import { NgModule } from '@angular/core';
import { EmployerSignupComponent } from './auth/employer-signup/employer-signup.component';
import { Routes, RouterModule } from '@angular/router';

import { SharedRoutingModule } from '../shared/shared-routing.module';

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

const routes: Routes = [
    {path: '', redirectTo: '/auth', pathMatch: 'full'},
    {path: 'auth', component: AuthComponent},
    {path: '**', component: PageNotFoundComponent}    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }