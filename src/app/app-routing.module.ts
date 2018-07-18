import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedRoutingModule } from './shared/shared-routing.module';

const routes: Routes = [  
    {path: '', redirectTo: 'auth', pathMatch: 'full'},
    {path: 'auth', component: AuthComponent},
    {path: '**', component: PageNotFoundComponent}    
];

@NgModule({
    imports: [RouterModule.forRoot(routes), SharedRoutingModule],
    exports: [RouterModule]
})
export class AppRoutingModule { }