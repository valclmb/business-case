import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Marque} from '../models/Marque';
import {Modele} from '../models/Modele';
import {Garage} from '../models/Garage';

@Injectable({
  providedIn: 'root'
})
export class ModeleService {

  url = 'http://127.0.0.1:8000/api/modeles';
  constructor(private http: HttpClient) { }

  getModeles(): Observable<Modele[]>{
    return this.http.get<Modele[]>(this.url);
  }
  getOne(id: number): Observable<Modele>{
    return this.http.get<Modele>(`${this.url}/${id}`);
  }
  delete(id: number): Observable<Modele> {
    return this.http.delete<Modele>(`${this.url}/${id}`);
  }

  addModele(modele: Modele): Observable<Modele> {
    return this.http.post<Modele>(this.url, modele);
  }


}
