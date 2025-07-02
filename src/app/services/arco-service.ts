import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ArcoModel } from './arco.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArcoService {

  private http = inject(HttpClient);
  private url = 'http://localhost:8080/api/apiArcos/';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor() { }

  postArco(arco: ArcoModel): Observable<ArcoModel> {
    console.log('Enviando datos de la competencia:', arco);
    const body = JSON.stringify(arco);
    return this.http.post<ArcoModel>(this.url, body, { headers: this.headers });
  }

  deleteArco(idArco: number): Observable<void> {
    const deleteUrl = `${this.url}${idArco}`;
    return this.http.delete<void>(deleteUrl, { headers: this.headers });
  }
}
