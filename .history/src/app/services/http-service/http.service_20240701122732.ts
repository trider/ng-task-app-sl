import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Optional, Inject } from '@angular/core';


import { Observable } from 'rxjs';
import { ServicesModule, ServicesModuleConfig } from '../services.module';

@Injectable({ providedIn: 'root' })
export class HttpService {

  static forRoot(config: ServicesModuleConfig): any {
    return {
      ngModule: ServicesModule,
      providers: [
        { provide: HttpService, useValue: config }
      ]
    }

  }



  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*' 
    
    
    }),

  };

  

  constructor(
    public http: HttpClient,
    ) {
      
     }

   
  public getServiceData(url: any): Observable<any> {
    return this.http.get<any>(url);
  }

  public postServiceData(url: string, payload:any): Observable<any> {
    return this.http.post<any>(url, payload, this.httpOptions);
  }
  




}