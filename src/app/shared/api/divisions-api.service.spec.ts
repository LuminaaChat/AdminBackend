import { TestBed } from '@angular/core/testing';

import { TenantsApiService } from './tenants-api.service';

describe('DivisionsApiService', () => {
  let service: TenantsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TenantsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
