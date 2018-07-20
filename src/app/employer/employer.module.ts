import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployerDashboardComponent } from './employer-dashboard/employer-dashboard.component';
import { NotificationComponent } from './employer-dashboard/notification/notification.component';
import { EmployerRoutingModule } from './employer-routing/employer-routing.module';
import { EmployerTableComponent } from './employer-dashboard/employer-table/employer-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { JobsEditComponent } from './employer-dashboard/jobs-edit/jobs-edit.component';

@NgModule({
  imports: [
    CommonModule,
    EmployerRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  declarations: [
    EmployerDashboardComponent, 
    NotificationComponent, 
    EmployerTableComponent,
    JobsEditComponent,
  ],
  exports: [
    EmployerDashboardComponent, 
    NotificationComponent, 
    EmployerTableComponent,
    JobsEditComponent,
  ]
})
export class EmployerModule { }
