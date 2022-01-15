import { TestBed } from '@angular/core/testing';

import { ShareinfoService } from './shareinfo.service';

describe('ShareinfoService', () => {
  let service: ShareinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
