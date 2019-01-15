import { TestBed, inject } from '@angular/core/testing';

import { AdminAuthGarde } from './admin-auth-garde.service';

describe('AdminAuthGardeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminAuthGarde]
    });
  });

  it('should be created', inject([AdminAuthGarde], (service: AdminAuthGarde) => {
    expect(service).toBeTruthy();
  }));
});
