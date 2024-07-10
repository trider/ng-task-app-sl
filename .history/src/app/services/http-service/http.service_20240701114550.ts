import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Optional, Inject } from '@angular/core';


import { Observable } from 'rxjs';
import { config } from 'process';
import { DataService } from '../data-service/data.service';
import { ServicesModuleConfig } from '../services.module';

@Injectable({ providedIn: 'root' })
export class HttpService {



  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*' 
    
    
    }),

  };

  

  constructor(
    public http: HttpClient,
    @Optional()config: ServicesModuleConfig
    ) { }

   
  public getServiceData(url: any): Observable<any> {
    return this.http.get<any>(url);
  }

  public postServiceData(url: string, payload:any): Observable<any> {
    return this.http.post<any>(url, payload, this.httpOptions);
  }
  




}