import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { QuotesResponse } from '../interface/quotes.interface'

@Injectable({
  providedIn: 'root'
})
export class QoutesService {

  private urlApi: string = 'https://quote-garden.herokuapp.com/api/v3/'

  constructor(private http: HttpClient) { }

  getRandom(): Observable<QuotesResponse> {
    return this.http.get<QuotesResponse>(`${this.urlApi}quotes/random`)
  }

  getAuthorQuotes(author: string): Observable<QuotesResponse> {
    const params = new HttpParams( { fromString: `author=${author}` } )

    return this.http.get<QuotesResponse>(`${this.urlApi}quotes`, { params })
  }

}
