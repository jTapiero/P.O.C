import { TestBed } from '@angular/core/testing';

import { DsApiService } from './ds-api.service';

describe('DsApiService', () => {
  let service: DsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
