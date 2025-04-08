import { TestBed } from '@angular/core/testing';

import { EvenementAPIServiceService } from './evenement-apiservice.service';

describe('EvenementAPIServiceService', () => {
  let service: EvenementAPIServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvenementAPIServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
