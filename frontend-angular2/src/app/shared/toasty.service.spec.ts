/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Toasty } from './toasty.service';

describe('ToastyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Toasty]
    });
  });

  it('should ...', inject([Toasty], (service: Toasty) => {
    expect(service).toBeTruthy();
  }));
});
