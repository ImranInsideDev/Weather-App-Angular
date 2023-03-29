import { TestBed } from '@angular/core/testing';

import { HttpAjaxService } from './http-ajax.service';

describe('HttpAjaxService', () => {
  let service: HttpAjaxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpAjaxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
