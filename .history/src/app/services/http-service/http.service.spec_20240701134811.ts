import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HttpService } from './http.service';

describe('HttpService', () => {
  let httpService: HttpService;

  beforeEach(() => {
    
    
    TestBed.configureTestingModule({
    imports: [Observable, HttpClient, HttpHeaders, HttpClientTestingModule],
 
    });
    httpService = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(httpService).toBeTruthy();
  });
});
