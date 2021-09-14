import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualFillingsComponent } from './annual-fillings.component';

describe('AnnualFillingsComponent', () => {
  let component: AnnualFillingsComponent;
  let fixture: ComponentFixture<AnnualFillingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnualFillingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualFillingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
