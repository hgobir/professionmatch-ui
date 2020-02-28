import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }


  getUsers() {
    let token = localStorage.getItem('access_token');
    return this.http.get('/server/api/v1/users');
  }

  getUser(id: number) {
    let token = localStorage.getItem('access_token');
    return this.http.get('/server/api/v1/users/'+id);
  }

  createUserRegistration(user) {
    let body = JSON.stringify(user);
    return this.http.post('/server/api/v1/users', body, httpOptions);
  }





}
