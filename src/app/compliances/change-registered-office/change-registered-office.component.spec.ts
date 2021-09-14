import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeRegisteredOfficeComponent } from './change-registered-office.component';

describe('ChangeRegisteredOfficeComponent', () => {
  let component: ChangeRegisteredOfficeComponent;
  let fixture: ComponentFixture<ChangeRegisteredOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeRegisteredOfficeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeRegisteredOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
