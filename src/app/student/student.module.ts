import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing/student-routing.module';
import { TeaserPipe } from './teaser.pipe';
import { ProfileFormComponent } from './profile/profile-form/profile-form.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard/student-dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import {MatCardModule} from '@angular/material/card';
import { ApplyComponent } from './apply/apply.component';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    StudentRoutingModule,
    MatFormFieldModule
  ],
  declarations: [
    StudentDashboardComponent, 
    ProfileFormComponent, 
    ApplyComponent,
    TeaserPipe
  ],
})
export class StudentModule { }
