import { TestBed, inject } from '@angular/core/testing';

import { CurrencyFollowService } from './currency-follow.service';

describe('CurrencyFollowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrencyFollowService]
    });
  });

  it('should be created', inject([CurrencyFollowService], (service: CurrencyFollowService) => {
    expect(service).toBeTruthy();
  }));
});
