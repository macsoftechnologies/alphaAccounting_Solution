import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeTaxReturnFillingComponent } from './income-tax-return-filling.component';

describe('IncomeTaxReturnFillingComponent', () => {
  let component: IncomeTaxReturnFillingComponent;
  let fixture: ComponentFixture<IncomeTaxReturnFillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomeTaxReturnFillingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeTaxReturnFillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
