import { NgModule } from '@angular/core';

import { EmployerSignupComponent } from './auth/employer-signup/employer-signup.component';

import { SharedRoutingModule } from './shared/shared-routing.module';
import { Route, Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { EmployerDashboardComponent } from './employer/employer-dashboard/employer-dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const routes: Routes = [
    {path: '', redirectTo: '/studentlogin', pathMatch: 'full'},
    {path: 'auth', component: AuthComponent},
    {path: '**', component: PageNotFoundComponent}    
];

@NgModule({
    imports: [RouterModule.forRoot(routes), SharedRoutingModule],
    exports: [RouterModule]
})
export class AppRoutingModule { }