import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployerRoutingModule } from '../employer/employer-routing/employer-routing.module';
import { StudentRoutingModule } from '../student/student-routing/student-routing.module';

const routes: Routes = [
]


@NgModule({
  imports: [RouterModule.forRoot(routes), EmployerRoutingModule, StudentRoutingModule],
  declarations: [],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
