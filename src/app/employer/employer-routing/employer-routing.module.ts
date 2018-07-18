import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import {JobDetailsComponent} from '../../shared/job-details/job-details.component'

const route = [ /* ROUTES WILL GO HERE */ 
{ path: 'job-details/:id', component: JobDetailsComponent}
=======
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' }

>>>>>>> 28fda87f474aaccaa799698aea97eb97f756eb3e
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class EmployerRoutingModule { }
