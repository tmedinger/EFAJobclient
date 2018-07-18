import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing/student-routing.module';
import { ProfileFormComponent } from './profile/profile-form/profile-form.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard/student-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule
  ],
  
  declarations: [
    StudentDashboardComponent, 
    ProfileFormComponent]
})
export class StudentModule { }
