import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing/student-routing.module';
import { TeaserPipe } from './teaser.pipe';

@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule
  ],
  declarations: [TeaserPipe]
})
export class StudentModule { }
