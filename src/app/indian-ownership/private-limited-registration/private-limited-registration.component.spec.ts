import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateLimitedRegistrationComponent } from './private-limited-registration.component';

describe('PrivateLimitedRegistrationComponent', () => {
  let component: PrivateLimitedRegistrationComponent;
  let fixture: ComponentFixture<PrivateLimitedRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateLimitedRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateLimitedRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
