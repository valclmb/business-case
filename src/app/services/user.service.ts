import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Marque} from '../models/Marque';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/User';
import {Garage} from '../models/Garage';
import {Modele} from '../models/Modele';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://127.0.0.1:8000/api/users';

  // special url of api for register
  urlAdd = 'http://127.0.0.1:8000/register';
  constructor(private http: HttpClient) { }


  getUser(): Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }

  getOne(id: number): Observable<User>{
    return this.http.get<User>(`${this.url}/${id}`);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.urlAdd, user);
  }

  delete(id: number): Observable<User> {
    return this.http.delete<User>(`${this.url}/${id}`);
  }

}

