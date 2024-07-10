import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HttpService } from './http.service';

describe('HttpService', () => {
  let httpService: HttpService;

  beforeEach(() => {
    
    
    TestBed.configureTestingModule({
    imports: [HttpService, Observable, HttpClient, HttpHeaders],
 
    });
    httpService = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(httpService).toHaveBeenCalled
  });
});
