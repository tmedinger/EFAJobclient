import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-employer-login',
  templateUrl: './employer-login.component.html',
  styleUrls: ['./employer-login.component.css']
})
export class EmployerLoginComponent implements OnInit {

  employerForm: FormGroup;
  //Form State
  loading = false;
  success = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.employerForm = this.fb.group({
      username: ['', [
        Validators.required
      ]],
      password: ['', [
        Validators.required
      ]]
    });
    }
    get username() {
      return this.employerForm.get('username')
    }
    get password() {
      return this.employerForm.get('password')
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

