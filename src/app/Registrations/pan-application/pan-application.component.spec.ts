import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PANApplicationComponent } from './pan-application.component';

describe('PANApplicationComponent', () => {
  let component: PANApplicationComponent;
  let fixture: ComponentFixture<PANApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PANApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PANApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
