import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoleProprietorshipRegistrationComponent } from './sole-proprietorship-registration.component';

describe('SoleProprietorshipRegistrationComponent', () => {
  let component: SoleProprietorshipRegistrationComponent;
  let fixture: ComponentFixture<SoleProprietorshipRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoleProprietorshipRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoleProprietorshipRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
