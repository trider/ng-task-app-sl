import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';

describe('HttpService', () => {
  let httpService: HttpService;

  beforeEach(() => {
    

    TestBed.configureTestingModule({
      imports:[HttpService]
    // imports: [HttpService, Observable, HttpClient, HttpHeaders],
 
    });
    httpService = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(httpService).toHaveBeenCalled
  });
});
