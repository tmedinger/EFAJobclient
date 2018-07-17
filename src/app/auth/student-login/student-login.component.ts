import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {

  studentForm: FormGroup;
  //Form State
  loading = false;
  success = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.studentForm = this.fb.group({
      username: ['', [
        Validators.required
      ]],
      password: ['', [
        Validators.required
      ]]
    });
    }
    get username() {
      return this.studentForm.get('username')
    }
    get password() {
      return this.studentForm.get('password')
    }
    // async submitHandler(){
    //   this.loading = true;

    //   const formValue = this.employerForm.value;
    //   try{
    //     await this.backend.collection('').add(formValue);
    //     this.success = true;
    //   }catch(err){
    //     console.log(err)
    //   }
    //   this.loading = false;
    // }
  }
