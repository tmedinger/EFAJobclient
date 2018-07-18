import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class JobService {


  constructor(private http: Http) { }


  getJobs() {
    return this.http.get(`http://localhost:3000/jobs`);
  }

  addJob(newJob) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`http://localhost:3000/addjob`, newJob, {headers: headers})
  }
}
