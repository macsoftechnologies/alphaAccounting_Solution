import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePersonCompanyRegistrationComponent } from './one-person-company-registration.component';

describe('OnePersonCompanyRegistrationComponent', () => {
  let component: OnePersonCompanyRegistrationComponent;
  let fixture: ComponentFixture<OnePersonCompanyRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnePersonCompanyRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnePersonCompanyRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
