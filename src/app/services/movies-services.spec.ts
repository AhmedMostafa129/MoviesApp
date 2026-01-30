import { TestBed } from '@angular/core/testing';

import { MoviesServices } from './movies-services';

describe('MoviesServices', () => {
  let service: MoviesServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
