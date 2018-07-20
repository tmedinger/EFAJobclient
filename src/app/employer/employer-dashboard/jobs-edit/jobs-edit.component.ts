import { Component, OnInit, NgModule } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-jobs-edit',
  templateUrl: './jobs-edit.component.html',
  styleUrls: ['./jobs-edit.component.css']
})
export class JobsEditComponent implements OnInit {

jobEditForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
