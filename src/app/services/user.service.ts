import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Marque} from '../models/Marque';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/User';
import {Garage} from '../models/Garage';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://127.0.0.1:8000/api/users';
  urlAdd = 'http://127.0.0.1:8000/register';
  constructor(private http: HttpClient) { }

  getUser(): Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.urlAdd, user);
  }

}

