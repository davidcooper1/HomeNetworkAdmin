import { TestBed } from '@angular/core/testing';

import { LiveUsageService } from './live-usage.service';

describe('LiveUsageService', () => {
  let service: LiveUsageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiveUsageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
