import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {JobDetailsComponent} from '../../shared/job-details/job-details.component'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' }

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class EmployerRoutingModule { }
