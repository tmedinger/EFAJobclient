import { Component, OnInit } from '@angular/core';
import { Student } from '../student'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {
<<<<<<< HEAD
  
  student = new FormGroup({
    first_name:new FormControl,
    last_name:new FormControl,
    email:new FormControl,
    username:new FormControl,
    password:new FormControl,
    linkToResume:new FormControl,
  })

  social_media = new FormGroup({
    linkToPortfolio:new FormControl,
    linkToGitHub:new FormControl,
    linkToCodePen:new FormControl,
    linkToProjects:new FormControl,
  })

=======
  studentForm: FormGroup;
  socialMedia: FormGroup;
 
>>>>>>> develop
  // student:Student={
  //   first_name:'',
  //   last_name:'',
  //   email:'',
  //   username:'',
  //   password:'',
  //   linkToResume:'',
<<<<<<< HEAD
=======
  // }
  // socialMedia={
>>>>>>> develop
  //   linkToPortfolio:'',
  //   linkToGitHub:'',
  //   linkToCodePen:'',
  //   linkToProjects:[],
  // }
<<<<<<< HEAD
  constructor() { }

  ngOnInit() {
  }
handleSubmit(){
  console.log('submitted', this.student.value)
}
=======
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
>>>>>>> develop
}
