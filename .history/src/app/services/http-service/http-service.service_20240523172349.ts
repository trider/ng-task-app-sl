import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  } from '@angular/common/http';


import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import HttpsProxyAgent from 'https-proxy-agent';








@Injectable({ providedIn: 'root' })
export class HttpClientService {



  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    proxyConfig:  [{
      context: '/api',
      target: 'https://u767k4g1u6.execute-api.us-east-1.amazonaws.com',
      secure: false
    }]
  };

  

  constructor(
    private http: HttpClient,
    ) { }

   
  public getServiceData(url: any): Observable<any> {
    return this.http.get<any>(url);
  }

  public postServiceData(url: string, payload:any): Observable<any> {
    return this.http.post<any>(url, payload, this.httpOptions,);
  }
  




}