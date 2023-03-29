import { TestBed } from '@angular/core/testing';

import { ConnectionIntermidiatorService } from './connection-intermidiator.service';

describe('ConnectionIntermidiatorService', () => {
  let service: ConnectionIntermidiatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectionIntermidiatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
