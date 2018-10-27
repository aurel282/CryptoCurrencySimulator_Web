import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneysimulatorComponent } from './moneysimulator.component';

describe('MoneysimulatorComponent', () => {
  let component: MoneysimulatorComponent;
  let fixture: ComponentFixture<MoneysimulatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneysimulatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneysimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
