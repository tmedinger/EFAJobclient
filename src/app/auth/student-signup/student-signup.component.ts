import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, AbstractControl} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-student-signup',
  templateUrl: './student-signup.component.html',
  styleUrls: ['./student-signup.component.css']
})
export class StudentSignupComponent implements OnInit {
  static MatchPassword(AC: AbstractControl ){
    let password = AC.get('Password').value;
    let confirmpassword = AC.get('ConfirmPassword').value
      if(password != confirmpassword){
        console.log('false');
        AC.get('confirmpassword').setErrors( {MatchPassword: true} )
      } else {
        console.log('true');
        return null
      }
  }

  myForm: FormGroup;
 
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.myForm = this.fb.group({
      Username: '',
      Email: '',
      Password: '',
      ConfirmPassword: ''
    })
    this.myForm.valueChanges.subscribe(console.log)
  }

}
