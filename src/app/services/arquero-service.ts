import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ArqueroModel } from './arquero.model';
import { ArqueroDTOModel } from './arquerodto.model';

@Injectable({
  providedIn: 'root',
})
export class ArqueroService {
  private http = inject(HttpClient);
  private url = 'http://localhost:8080/api/apiArqueros/';
  private headers = {
    'Content-Type': 'application/json',
  };

  constructor() {}

  getAll(): Observable<ArqueroModel[]> {
    return this.http.get<ArqueroModel[]>(this.url);
  }

  getById(id: number): Observable<ArqueroModel> {
    return this.http.get<ArqueroModel>(`${this.url}${id}`);
  }

  getPDF(id: number): Observable<Blob> {
    return this.http.get(`${this.url}generarPdf/${id}`, {
      responseType: 'blob',
    });
  }

  post(arquero: ArqueroDTOModel): Observable<ArqueroDTOModel> {
    return this.http.post<ArqueroDTOModel>(this.url, JSON.stringify(arquero), {
      headers: this.headers,
    });
  }

  uploadImage(id: number, image: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', image);
    return this.http.post(`${this.url}${id}/image`, formData);
  }

  getImage(id: number): Observable<Blob> {
    return this.http.get(`${this.url}${id}/image`, { responseType: 'blob' });
  }
}
