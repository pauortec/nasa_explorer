import { TestBed } from '@angular/core/testing';
import { Postales } from './postales';

describe('Postales', () => {
  let service: Postales;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Postales);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
