import { TestBed } from '@angular/core/testing';

import { Showcatogry } from './showcatogry';

describe('Showcatogry', () => {
  let service: Showcatogry;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Showcatogry);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
