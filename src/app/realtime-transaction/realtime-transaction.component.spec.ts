import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtimeTransactionComponent } from './realtime-transaction.component';

describe('RealtimeTransactionComponent', () => {
  let component: RealtimeTransactionComponent;
  let fixture: ComponentFixture<RealtimeTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtimeTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtimeTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
