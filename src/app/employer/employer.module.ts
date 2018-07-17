import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployerDashboardComponent } from './employer-dashboard/employer-dashboard.component';
import { NotificationComponent } from './employer-dashboard/notification/notification.component';
import { EmployerRoutingModule } from './employer-routing/employer-routing.module';
import { JobsEditComponent } from './employer-dashboard/jobs-edit/jobs-edit.component';

@NgModule({
  imports: [
    CommonModule,
    EmployerRoutingModule
  ],
  declarations: [EmployerDashboardComponent, NotificationComponent, JobsEditComponent]
})
export class EmployerModule { }
