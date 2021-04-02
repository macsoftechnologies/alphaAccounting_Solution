import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducerCompanyRegistrationComponent } from './producer-company-registration.component';

describe('ProducerCompanyRegistrationComponent', () => {
  let component: ProducerCompanyRegistrationComponent;
  let fixture: ComponentFixture<ProducerCompanyRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducerCompanyRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducerCompanyRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
