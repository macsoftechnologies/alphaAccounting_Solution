import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalSignatureRegistrationComponent } from './digital-signature-registration.component';

describe('DigitalSignatureRegistrationComponent', () => {
  let component: DigitalSignatureRegistrationComponent;
  let fixture: ComponentFixture<DigitalSignatureRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalSignatureRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalSignatureRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
