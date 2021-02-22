import { TestBed } from '@angular/core/testing';

import { SumeService } from './sume.service';

describe('SumeService', () => {
  let service: SumeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SumeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
