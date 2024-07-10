import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';

describe('HttpService', () => {
  let httpService: HttpService;

  beforeEach(() => {
    
    imports:[HttpService],
    TestBed.configureTestingModule({
    // imports: [HttpService, Observable, HttpClient, HttpHeaders],
 
    });
    httpService = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(httpService).toHaveBeenCalled
  });
});
