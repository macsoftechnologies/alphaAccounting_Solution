import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TANApplicationComponent } from './tan-application.component';

describe('TANApplicationComponent', () => {
  let component: TANApplicationComponent;
  let fixture: ComponentFixture<TANApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TANApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TANApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
