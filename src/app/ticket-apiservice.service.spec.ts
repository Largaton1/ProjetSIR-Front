import { TestBed } from '@angular/core/testing';

import { TicketAPIServiceService } from './ticket-apiservice.service';

describe('TicketAPIServiceService', () => {
  let service: TicketAPIServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketAPIServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
