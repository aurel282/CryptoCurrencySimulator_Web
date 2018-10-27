import { TestBed, inject } from '@angular/core/testing';

import { CurrencyService } from './currency.http.service.service';

describe('Currency.Http.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrencyService]
    });
  });

  it('should be created', inject([CurrencyService], (service: CurrencyService) => {
    expect(service).toBeTruthy();
  }));
});
