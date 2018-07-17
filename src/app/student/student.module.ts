import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing/student-routing.module';
import { ProfileFormComponent } from './profile/profile-form/profile-form.component';

@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule
  ],
  declarations: [ProfileFormComponent]
})
export class StudentModule { }
