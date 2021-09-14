import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeAuthorisedCapitalCompanyComponent } from './change-authorised-capital-company.component';

describe('ChangeAuthorisedCapitalCompanyComponent', () => {
  let component: ChangeAuthorisedCapitalCompanyComponent;
  let fixture: ComponentFixture<ChangeAuthorisedCapitalCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeAuthorisedCapitalCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeAuthorisedCapitalCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
