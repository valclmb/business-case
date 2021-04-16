import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/User';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://127.0.0.1:8000/';
  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) { }

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
    return this.http.get(this.url + 'api/user', httpOptions);
  }

  public isAuthenticated(): boolean {
    // Check whether the token is expired and return
    const token = window.sessionStorage.getItem('auth-token');
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }
}
