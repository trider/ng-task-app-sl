import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, Headers, Http, Request, RequestMethod, RequestOptions, RequestOptionsArgs, Response } from '@angular/common/http';

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

   
  public getServiceData(url: any): Observable<any> {
    return this.http.get<any>(url);
  }

  public postServiceData(url: string, payload:any): Observable<any> {
    return this.http.post<any>(url, payload, this.httpOptions);
  }


  private _buildRequestOptions(method: RequestMethod, url: string, body: any, tenant: string, username: string,
    accessToken: string, options?: RequestOptionsArgs): RequestOptions {
options = options || {};

const headers = new Headers();

if (!(body instanceof FormData)) {
headers.set('Accept', 'application/json');
headers.set('Content-Type', 'application/json');
}

headers.set(TENANT_HEADER, tenant);
headers.set(USER_HEADER, username);
headers.set(AUTHORIZATION_HEADER, accessToken);

const requestOptions: RequestOptions = new RequestOptions({
method: method,
url: url,
body: body,
headers: headers
});

return requestOptions.merge(options);
}

private createRequest(method: RequestMethod, url: string, body?: any, options?: RequestOptionsArgs, silent?: boolean): Observable<any> {
return this.store.select(fromRoot.getAuthenticationState)
.take(1)
.map(state => this._buildRequestOptions(method, url, body, state.tenant, state.username, state.authentication.accessToken, options))
.flatMap(requestOptions => {
this.process.next(Action.QueryStart);

const request: Observable<any> = this.http.request(new Request(requestOptions))
.catch((err: any) => {
const error = err.json();
if (silent) {
return Observable.throw(error);
}

switch (error.status) {
case 409:
return Observable.throw(error);
case 401:
case 403:
this.store.dispatch({type: LOGOUT});
return Observable.throw('User is not authenticated');
default:
console.error('Error', error);
this.error.next(error);
return Observable.throw(error);
}
}).finally(() => this.process.next(Action.QueryStop));

return request.map((res: Response) => {
if (res.text()) {
try {
return res.json();
} catch (err) {
return res.text();
}
}
});
});
}
  




}