import { TestBed } from '@angular/core/testing';

import { VariantOptionService } from './variant-option.service';

describe('VariantOptionService', () => {
  let service: VariantOptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VariantOptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
