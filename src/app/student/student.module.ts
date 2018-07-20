import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing/student-routing.module';
import { TeaserPipe } from './teaser.pipe';
import { ProfileFormComponent } from './profile/profile-form/profile-form.component';
import { MatCardModule} from '@angular/material/card';
import { ApplyComponent } from './apply/apply.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatButtonModule} from '@angular/material';
import { StudentNotificationsComponent } from './student-dashboard/student-notifications/student-notifications.component';
import { JobsAppliedComponent } from './profile/jobs-applied/jobs-applied.component';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';

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
    MatIconModule,
    MatPaginatorModule,
  ],
  declarations: [ 
    ProfileComponent,
    ProfileFormComponent, 
    JobsAppliedComponent,
    ApplyComponent,
    TeaserPipe,
    StudentNotificationsComponent,
    StudentDashboardComponent,
  ],
  exports: [
    ProfileComponent,
    ProfileFormComponent, 
    JobsAppliedComponent,
    ApplyComponent,
    TeaserPipe,
    StudentNotificationsComponent,
    FormsModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class StudentModule { }
