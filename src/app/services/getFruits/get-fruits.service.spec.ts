import { TestBed } from '@angular/core/testing';

import { GetFruitsService } from './get-fruits.service';

describe('GetFruitsService', () => {
  let service: GetFruitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetFruitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
