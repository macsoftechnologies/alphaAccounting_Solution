import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SSIApplicationComponent } from './ssi-application.component';

describe('SSIApplicationComponent', () => {
  let component: SSIApplicationComponent;
  let fixture: ComponentFixture<SSIApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SSIApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SSIApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
