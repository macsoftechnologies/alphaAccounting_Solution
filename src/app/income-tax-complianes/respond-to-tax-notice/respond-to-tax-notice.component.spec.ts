import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespondToTaxNoticeComponent } from './respond-to-tax-notice.component';

describe('RespondToTaxNoticeComponent', () => {
  let component: RespondToTaxNoticeComponent;
  let fixture: ComponentFixture<RespondToTaxNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespondToTaxNoticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RespondToTaxNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
