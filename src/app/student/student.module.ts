import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing/student-routing.module';
import { TeaserPipe } from './teaser.pipe';
import { ProfileFormComponent } from './profile/profile-form/profile-form.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { ApplyComponent } from './apply/apply.component';
import { StudentNotificationsComponent } from './student-dashboard/student-notifications/student-notifications.component';
import { JobsAppliedComponent } from './profile/jobs-applied/jobs-applied.component';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatExpansionModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    StudentRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatExpansionModule,
    FormsModule,
    MatButtonModule,
  ],
  declarations: [ 
    StudentDashboardComponent,
    ProfileComponent,
    ProfileFormComponent, 
    JobsAppliedComponent,
    ApplyComponent,
    TeaserPipe,
    StudentNotificationsComponent,
  ],
  exports: [
    StudentDashboardComponent,
    ProfileComponent,
    ProfileFormComponent, 
    JobsAppliedComponent,
    ApplyComponent,
    TeaserPipe,
    StudentNotificationsComponent,
    FormsModule
  ]
})
export class StudentModule { }
