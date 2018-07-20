import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { MatSnackBar } from '@angular/material';


const URL = '';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'resume'});
  public duration: number;

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ResumeUpload:uploaded:', item, status, response);
         alert('File uploaded successfully');
     }
   };

   openSnackBar() {
    this.snackBar.dismiss();
  }
}
