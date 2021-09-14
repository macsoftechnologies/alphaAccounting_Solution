import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ISORegistrationComponent } from './iso-registration.component';

describe('ISORegistrationComponent', () => {
  let component: ISORegistrationComponent;
  let fixture: ComponentFixture<ISORegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ISORegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ISORegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
