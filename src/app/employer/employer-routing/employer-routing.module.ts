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

<<<<<<< HEAD
>>>>>>> 28fda87f474aaccaa799698aea97eb97f756eb3e
=======
>>>>>>> beb868bbfa0cd80c25da901c427153fa09444dab
>>>>>>> develop
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class EmployerRoutingModule { }
