import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CompetenciaModel } from './competencia.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompetenciaService {

  private http = inject(HttpClient);
  private url = 'https://tiroconarco.onrender.com/api/apiCompetencias/';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor() { }

  postCompetencia(competencia: CompetenciaModel): Observable<CompetenciaModel> {
    console.log('Enviando datos de la competencia:', competencia);
    const body = JSON.stringify(competencia);
    return this.http.post<CompetenciaModel>(this.url, body, { headers: this.headers });
  }

  deleteCompetencia(idCompetencia: number): Observable<void> {
    const deleteUrl = `${this.url}${idCompetencia}`;
    return this.http.delete<void>(deleteUrl, { headers: this.headers });
  }
}
