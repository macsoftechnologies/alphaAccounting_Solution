import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainceOfMinutesComponent } from './maintaince-of-minutes.component';

describe('MaintainceOfMinutesComponent', () => {
  let component: MaintainceOfMinutesComponent;
  let fixture: ComponentFixture<MaintainceOfMinutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintainceOfMinutesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainceOfMinutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
