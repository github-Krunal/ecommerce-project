import { TestBed } from '@angular/core/testing';

import { AdminApiService } from './admin-api.service';

describe('AdminService', () => {
  let service: AdminApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
