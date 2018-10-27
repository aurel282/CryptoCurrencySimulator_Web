import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneysimulatorComponentV2 } from './moneysimulatorV2.component';

describe('MoneysimulatorComponentV2', () => {
  let component: MoneysimulatorComponentV2;
  let fixture: ComponentFixture<MoneysimulatorComponentV2>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneysimulatorComponentV2 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneysimulatorComponentV2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
