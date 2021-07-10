import { TestBed } from '@angular/core/testing';

import { GeneralFacadeService } from './general-facade.service';

describe('GeneralFacadeService', () => {
  let service: GeneralFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
