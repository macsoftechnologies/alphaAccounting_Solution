import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllotmentOfSharesComponent } from './allotment-of-shares.component';

describe('AllotmentOfSharesComponent', () => {
  let component: AllotmentOfSharesComponent;
  let fixture: ComponentFixture<AllotmentOfSharesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllotmentOfSharesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllotmentOfSharesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
