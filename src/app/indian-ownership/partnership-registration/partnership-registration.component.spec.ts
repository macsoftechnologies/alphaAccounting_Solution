import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnershipRegistrationComponent } from './partnership-registration.component';

describe('PartnershipRegistrationComponent', () => {
  let component: PartnershipRegistrationComponent;
  let fixture: ComponentFixture<PartnershipRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnershipRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnershipRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
