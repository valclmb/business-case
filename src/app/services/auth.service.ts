import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://127.0.0.1:8000/';
  constructor(private http: HttpClient) { }

  login(credentials: User): Observable<any>{
    return this.http.post(this.url + 'login_check', {
      username: credentials.username,
      password: credentials.password
    });
  }

  saveUser(token: string): Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders({ Authorization: 'Bearer ' + token})
    };
    console.log(httpOptions);
    return this.http.get(this.url + 'api/user', httpOptions);
  }
}
