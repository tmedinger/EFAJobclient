import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployerSignupComponent } from './auth/employer-signup/employer-signup.component';

const routes: Routes = [
    { path: '', redirectTo: '/employersignup', pathMatch: 'full' },
    { path: 'employersignup', component: EmployerSignupComponent}
      
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }