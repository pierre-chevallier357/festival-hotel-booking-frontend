/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LodgingService } from './lodging.service';

describe('Service: Lodging', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LodgingService]
    });
  });

  it('should ...', inject([LodgingService], (service: LodgingService) => {
    expect(service).toBeTruthy();
  }));
});
