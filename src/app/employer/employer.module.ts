import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployerDashboardComponent } from './employer-dashboard/employer-dashboard.component';
import { NotificationComponent } from './employer-dashboard/notification/notification.component';
import { EmployerRoutingModule } from './employer-routing/employer-routing.module';
import { EmployerTableComponent } from './employer-dashboard/employer-table/employer-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';

import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    EmployerRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule
  ],
  declarations: [EmployerDashboardComponent, NotificationComponent, EmployerTableComponent]
})
export class EmployerModule { }
