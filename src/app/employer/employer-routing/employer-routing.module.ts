import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
<<<<<<< HEAD
  
=======
  { path: '', redirectTo: '/', pathMatch: 'full' }
>>>>>>> 96deee37eb63b50f4ad6a569b7495120363da8ee
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class EmployerRoutingModule { }
