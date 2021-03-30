import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicLimitedRegistrationComponent } from './public-limited-registration.component';

describe('PublicLimitedRegistrationComponent', () => {
  let component: PublicLimitedRegistrationComponent;
  let fixture: ComponentFixture<PublicLimitedRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicLimitedRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicLimitedRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
