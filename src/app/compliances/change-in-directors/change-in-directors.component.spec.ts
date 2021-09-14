import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeInDirectorsComponent } from './change-in-directors.component';

describe('ChangeInDirectorsComponent', () => {
  let component: ChangeInDirectorsComponent;
  let fixture: ComponentFixture<ChangeInDirectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeInDirectorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeInDirectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
