import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSimulationComponent } from './dialog-simulation.component';

describe('DialogSimulationComponent', () => {
  let component: DialogSimulationComponent;
  let fixture: ComponentFixture<DialogSimulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogSimulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
