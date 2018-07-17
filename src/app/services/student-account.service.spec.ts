import { TestBed, inject } from '@angular/core/testing';

import { StudentAccountService } from './student-account.service';

describe('StudentAccountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentAccountService]
    });
  });

  it('should be created', inject([StudentAccountService], (service: StudentAccountService) => {
    expect(service).toBeTruthy();
  }));
});
