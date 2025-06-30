import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TiroconApi {

  private apiUrl: string = 'https://tiroconarco.onrender.com/api/apiArqueros/';

  constructor(private http: HttpClient) { }

  getAllArchers() {
    return this.http.get<any[]>(this.apiUrl);
  }
}
