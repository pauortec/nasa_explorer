import { TestBed } from '@angular/core/testing';
import { Asteroides } from './asteroides';

describe('Asteroides', () => {
  let service: Asteroides;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Asteroides);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
