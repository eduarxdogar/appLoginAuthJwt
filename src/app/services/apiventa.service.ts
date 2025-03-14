import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Venta } from '../models/venta';
import { Observable } from 'rxjs';
import { Response } from '../models/response';

const httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ApiventaService {
  url: string = 'http://localhost:59489/api/venta';

  constructor(private _http: HttpClient) {}
  add(venta: Venta): Observable<Response> {
    console.log('Enviando venta:', venta);
    return this._http.post<Response>(this.url, venta, httpOption);
  }
}
