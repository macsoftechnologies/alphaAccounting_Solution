import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnershipFirmComponent } from './partnership-firm.component';

describe('PartnershipFirmComponent', () => {
  let component: PartnershipFirmComponent;
  let fixture: ComponentFixture<PartnershipFirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnershipFirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnershipFirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
