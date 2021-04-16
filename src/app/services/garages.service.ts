import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Garage} from '../models/Garage';


@Injectable({
  providedIn: 'root'
})
export class GaragesService {

  url = 'http://127.0.0.1:8000/api/garages';
  constructor(private http: HttpClient) { }

  getGarages(): Observable<Garage[]>{
    return this.http.get<Garage[]>(this.url);
  }
  getOne(id: number): Observable<Garage>{
    return this.http.get<Garage>(`${this.url}/${id}`);
  }

  delete(id: number): Observable<Garage> {
    return this.http.delete<Garage>(`${this.url}/${id}`);
  }

  addGarage(garage: Garage): Observable<Garage> {
    return this.http.post<Garage>(this.url, garage);
  }


}
