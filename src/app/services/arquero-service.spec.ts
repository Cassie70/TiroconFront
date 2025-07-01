import { TestBed } from '@angular/core/testing';

import { ArqueroService } from './arquero-service';

describe('ArqueroService', () => {
  let service: ArqueroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArqueroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
