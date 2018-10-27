import { TestBed, inject } from '@angular/core/testing';

import { TradeStreamerService } from './trade-streamer.service';

describe('TradeStreamerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TradeStreamerService]
    });
  });

  it('should be created', inject([TradeStreamerService], (service: TradeStreamerService) => {
    expect(service).toBeTruthy();
  }));
});
