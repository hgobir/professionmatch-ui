import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

//display god object on screen then im finished!!

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private http: HttpClient) { }

  getMatches() {
    let token = localStorage.getItem('access_token');
    return this.http.get('/server/api/v1/matches');
    // http://localhost:8080/api/v1/matches
  }

  getMatch(id: number) {
    let token = localStorage.getItem('access_token');
    return this.http.get('/server/api/v1/matches' + id);
  }






}
