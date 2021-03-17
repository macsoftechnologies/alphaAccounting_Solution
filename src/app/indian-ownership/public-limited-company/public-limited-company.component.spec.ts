import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicLimitedCompanyComponent } from './public-limited-company.component';

describe('PublicLimitedCompanyComponent', () => {
  let component: PublicLimitedCompanyComponent;
  let fixture: ComponentFixture<PublicLimitedCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicLimitedCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicLimitedCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
