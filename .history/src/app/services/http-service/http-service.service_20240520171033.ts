import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, Headers, Http, Request, RequestMethod, RequestOptions, RequestOptionsArgs, Respons } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';




@Injectable({ providedIn: 'root' })
export class HttpClientService {



  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    ) { }

    public get(url: string, options?: RequestOptionsArgs, silent?: boolean): Observable<any> {
      return this.createRequest(RequestMethod.Get, url, undefined, options, silent);
    }
  
    public post(url: string, body: any, options?: RequestOptionsArgs, silent?: boolean): Observable<any> {
      return this.createRequest(RequestMethod.Post, url, body, options, silent);
    }
  
    public put(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
      return this.createRequest(RequestMethod.Put, url, body, options);
    }
  
    public delete(url: string, options?: RequestOptionsArgs): Observable<any> {
      return this.createRequest(RequestMethod.Delete, url, undefined, options);
    }
    
  




}