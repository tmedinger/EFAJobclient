import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatButtonToggleModule,
        MatDialogModule,
        MatFormFieldModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatPaginatorModule,
        MatRadioModule,
        MatSidenavModule,
        MatSlideToggleModule,
        MatTableModule,
        MatToolbarModule,
        MatTooltipModule, } from "@angular/material";
import { ReactiveFormsModule } from '../../../node_modules/@angular/forms';
import { JobDetailsComponent } from './job-details/job-details.component';
import { PipePipe } from './pipe.pipe';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatPaginatorModule,
    MatRadioModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    ReactiveFormsModule,

  ],

  exports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatPaginatorModule,
    MatRadioModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,

  ],
  declarations: [JobDetailsComponent, PipePipe]
})
export class SharedModule { }
