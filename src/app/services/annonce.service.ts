import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Annonce} from '../models/Annonce';
import {Garage} from '../models/Garage';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  url = 'http://127.0.0.1:8000/api/annonces';
  constructor(private http: HttpClient) { }


  getAnnonces(): Observable<Annonce[]>{
    return this.http.get<Annonce[]>(this.url);
  }
  // Récuperer un incident spécifique
  getOne(id: number): Observable<Annonce> {
    return this.http.get<Annonce>(`${this.url}/${id}`);
  }

  delete(id: number): Observable<Annonce> {
    return this.http.delete<Annonce>(`${this.url}/${id}`);
  }

}
