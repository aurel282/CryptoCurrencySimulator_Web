import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInfoCryptoComponent } from './dialog-info-crypto.component';

describe('DialogInfoCryptoComponent', () => {
  let component: DialogInfoCryptoComponent;
  let fixture: ComponentFixture<DialogInfoCryptoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogInfoCryptoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogInfoCryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
