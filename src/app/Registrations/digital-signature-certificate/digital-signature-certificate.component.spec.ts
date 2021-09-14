import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalSignatureCertificateComponent } from './digital-signature-certificate.component';

describe('DigitalSignatureCertificateComponent', () => {
  let component: DigitalSignatureCertificateComponent;
  let fixture: ComponentFixture<DigitalSignatureCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalSignatureCertificateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalSignatureCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
