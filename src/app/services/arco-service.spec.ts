import { TestBed } from '@angular/core/testing';

import { ArcoService } from './arco-service';

describe('ArcoService', () => {
  let service: ArcoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArcoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
