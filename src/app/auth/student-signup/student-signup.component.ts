import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-student-signup',
  templateUrl: './student-signup.component.html',
  styleUrls: ['./student-signup.component.css']
})
export class StudentSignupComponent implements OnInit {

  myForm: FormGroup;
 
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.myForm = this.fb.group({
      Username: '',
      Email: '',
      Password: '',
    })
    this.myForm.valueChanges.subscribe(console.log)
  }

}
