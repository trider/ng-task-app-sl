import { TestBed } from '@angular/core/testing';

import { HttpClientService } from './http-service.service';

describe('HttpServiceService', () => {
  let service: HttpClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpClientService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
