import { TestBed, inject } from '@angular/core/testing';

import { AuthGarde } from './auth-garde.service';

describe('AuthGardeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGarde]
    });
  });

  it('should be created', inject([AuthGarde], (service: AuthGarde) => {
    expect(service).toBeTruthy();
  }));
});
