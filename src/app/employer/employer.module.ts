import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployerDashboardComponent } from './employer-dashboard/employer-dashboard.component';
import { NotificationComponent } from './employer-dashboard/notification/notification.component';
import { EmployerRoutingModule } from './employer-routing/employer-routing.module';

@NgModule({
  imports: [
    CommonModule,
    EmployerRoutingModule
  ],
  declarations: [EmployerDashboardComponent, NotificationComponent]
})
export class EmployerModule { }
