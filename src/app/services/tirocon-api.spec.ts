import { TestBed } from '@angular/core/testing';

import { TiroconApi } from './tirocon-api';

describe('TiroconApi', () => {
  let service: TiroconApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiroconApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
