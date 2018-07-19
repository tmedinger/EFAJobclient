import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployerRoutingModule } from '../employer/employer-routing/employer-routing.module';
import { StudentRoutingModule } from '../student/student-routing/student-routing.module';
import { JobDetailsComponent } from './job-details/job-details.component';

const routes: Routes = [
  { path: 'jobdetails', component: JobDetailsComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes), EmployerRoutingModule, StudentRoutingModule],
  declarations: [],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
