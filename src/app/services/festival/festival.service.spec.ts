/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FestivalService } from './festival.service';

describe('Service: Festival', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FestivalService]
    });
  });

  it('should ...', inject([FestivalService], (service: FestivalService) => {
    expect(service).toBeTruthy();
  }));
});
