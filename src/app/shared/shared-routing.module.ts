import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployerRoutingModule } from '../../employer/employer-routing/employer-routing.module';
import { StudentRoutingModule } from '../../student/student-routing/student-routing.module';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
