import { Component, OnInit } from '@angular/core';
import { Student } from '../student'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {
  studentForm: FormGroup;
  socialMedia: FormGroup;
 
  // student:Student={
  //   first_name:'',
  //   last_name:'',
  //   email:'',
  //   username:'',
  //   password:'',
  //   linkToResume:'',
  // }
  // socialMedia={
  //   linkToPortfolio:'',
  //   linkToGitHub:'',
  //   linkToCodePen:'',
  //   linkToProjects:[],
  // }
  constructor(private sf: FormBuilder) {
    this.studentForm = sf.group({
    'first_name':'',
    'last_name':'',
    'email':'',
    'username':'',
    'password':'',
    'linkToResume':'',
    })
    this.socialMedia = sf.group({
      'linkToPortfolio':'',
      'linkToGitHub':'',
      'linkToCodePen':'',
      'linkToProjects':[],
    })
   }

  ngOnInit() {
  }
  handleSubmit(){
    
    console.log("submitted")
  }
  addProject(){
    console.log('add project clicked')
  }
}
