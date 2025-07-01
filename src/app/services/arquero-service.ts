import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ArqueroModel } from './arquero.model';

@Injectable({
  providedIn: 'root'
})
export class ArqueroService {

  private http = inject(HttpClient);
  private url = 'https://tiroconarco.onrender.com/api/apiArqueros/';
  private headers = {
    'Content-Type': 'application/json',
  };

  constructor() { }

  getAll(): Observable<ArqueroModel[]> {
    return this.http.get<ArqueroModel[]>(this.url);
  }

  getById(id: number): Observable<ArqueroModel> {
    return this.http.get<ArqueroModel>(`${this.url}${id}`);
  }

}
