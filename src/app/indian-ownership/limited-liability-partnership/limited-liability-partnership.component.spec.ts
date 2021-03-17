import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitedLiabilityPartnershipComponent } from './limited-liability-partnership.component';

describe('LimitedLiabilityPartnershipComponent', () => {
  let component: LimitedLiabilityPartnershipComponent;
  let fixture: ComponentFixture<LimitedLiabilityPartnershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimitedLiabilityPartnershipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LimitedLiabilityPartnershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
