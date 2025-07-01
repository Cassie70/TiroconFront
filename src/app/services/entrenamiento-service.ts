import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { EntrenamientoModel } from './entrenamiento.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntrenamientoService {

  private http = inject(HttpClient);
  private url = 'https://tiroconarco.onrender.com/api/apiEntrenamientos/';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor() { }

  postEntrenamiento(entrenamiento: EntrenamientoModel): Observable<EntrenamientoModel> {
    console.log('Enviando datos del entrenamiento:', entrenamiento);
    const body = JSON.stringify(entrenamiento);
    return this.http.post<EntrenamientoModel>(this.url, body, { headers: this.headers });
  }
}
