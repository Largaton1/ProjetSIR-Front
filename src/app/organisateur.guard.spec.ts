import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { organisateurGuard } from './organisateur.guard';

describe('organisateurGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => organisateurGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
