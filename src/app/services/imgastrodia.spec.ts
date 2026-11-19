import { TestBed } from '@angular/core/testing';
import { Imgastrodia } from './imgastrodia';

describe('Imgastrodia', () => {
  let service: Imgastrodia;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Imgastrodia);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
