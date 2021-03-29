import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitedLiabiltyRegistrationComponent } from './limited-liabilty-registration.component';

describe('LimitedLiabiltyRegistrationComponent', () => {
  let component: LimitedLiabiltyRegistrationComponent;
  let fixture: ComponentFixture<LimitedLiabiltyRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimitedLiabiltyRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LimitedLiabiltyRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
