import { TestBed, inject } from '@angular/core/testing';

import { EmployerAccountService } from './employer-account.service';

describe('EmployerAccountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployerAccountService]
    });
  });

  it('should be created', inject([EmployerAccountService], (service: EmployerAccountService) => {
    expect(service).toBeTruthy();
  }));
});
