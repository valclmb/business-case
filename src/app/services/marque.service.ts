import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Garage} from '../models/Garage';
import {Marque} from '../models/Marque';

@Injectable({
  providedIn: 'root'
})
export class MarqueService {

  url = 'http://127.0.0.1:8000/api/marques';
  constructor(private http: HttpClient) { }

  getMarques(): Observable<Marque[]>{
    return this.http.get<Marque[]>(this.url);
  }
  getOne(id: number): Observable<Marque>{
    return this.http.get<Marque>(`${this.url}/${id}`);
  }

  delete(id: number): Observable<Marque> {
    return this.http.delete<Marque>(`${this.url}/${id}`);
  }

  addMarque(marque: Marque): Observable<Marque> {
    return this.http.post<Marque>(this.url, marque);
  }

}
