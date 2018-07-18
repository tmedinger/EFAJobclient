import { Component, OnInit } from '@angular/core';
import { Student } from '../student'
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {
  
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

  // student:Student={
  //   first_name:'',
  //   last_name:'',
  //   email:'',
  //   username:'',
  //   password:'',
  //   linkToResume:'',
  //   linkToPortfolio:'',
  //   linkToGitHub:'',
  //   linkToCodePen:'',
  //   linkToProjects:[],
  // }
  constructor() { }

  ngOnInit() {
  }
handleSubmit(){
  console.log('submitted', this.student.value)
}
}
