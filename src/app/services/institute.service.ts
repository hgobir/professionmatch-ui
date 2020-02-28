import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InstituteService {

    constructor(private http: HttpClient) { }


    getInstitutes() {
    let token = localStorage.getItem('access_token');
    return this.http.get('/server/api/v1/institutes');
  }

  getInstitute(id: number) {
    let token = localStorage.getItem('access_token');
    return this.http.get('/server/api/v1/institutes/'+id);
  }

  // createUserRegistration(user) {
  //   let body = JSON.stringify(user);
  //   return this.http.post('/server/api/v1/users', body, httpOptions);
  // }






}
