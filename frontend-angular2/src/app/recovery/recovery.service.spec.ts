import { TestBed, inject } from '@angular/core/testing';
import { RecoveryService } from './recovery.service';

describe('PasswordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecoveryService]
    });
  });

  it('should ...', inject([RecoveryService], (service: RecoveryService) => {
    expect(service).toBeTruthy();
  }));
});
