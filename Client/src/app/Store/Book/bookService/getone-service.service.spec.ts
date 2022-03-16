import { TestBed } from '@angular/core/testing';

import { GetoneServiceService } from './getone-service.service';

describe('GetoneServiceService', () => {
  let service: GetoneServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetoneServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
