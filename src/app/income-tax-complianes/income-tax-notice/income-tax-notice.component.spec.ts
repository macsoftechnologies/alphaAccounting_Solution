import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeTaxNoticeComponent } from './income-tax-notice.component';

describe('IncomeTaxNoticeComponent', () => {
  let component: IncomeTaxNoticeComponent;
  let fixture: ComponentFixture<IncomeTaxNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomeTaxNoticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeTaxNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
