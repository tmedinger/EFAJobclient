import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {JobDetailsComponent} from '../../shared/job-details/job-details.component'

const route = [ /* ROUTES WILL GO HERE */ 
{ path: 'job-details/:id', component: JobDetailsComponent}
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class EmployerRoutingModule { }
