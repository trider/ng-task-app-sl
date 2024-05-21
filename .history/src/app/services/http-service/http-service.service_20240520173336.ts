import { Injectable } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';




@Injectable({ providedIn: 'root' })
export class HttpClientService {



  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClientModule,
    ) { }

   
  public getServiceData(url: any): Observable<any> {
    return this.http.get<any>(url);
  }

  public postServiceData(url: any, body:any): Observable<any> {
    return this.http.post<any>(url, body, this.httpOptions);
  }
  




}