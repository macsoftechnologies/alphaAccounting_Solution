import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TANRegistrationComponent } from './tan-registration.component';

describe('TANRegistrationComponent', () => {
  let component: TANRegistrationComponent;
  let fixture: ComponentFixture<TANRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TANRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TANRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
