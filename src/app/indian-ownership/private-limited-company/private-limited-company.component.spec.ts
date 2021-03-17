import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateLimitedCompanyComponent } from './private-limited-company.component';

describe('PrivateLimitedCompanyComponent', () => {
  let component: PrivateLimitedCompanyComponent;
  let fixture: ComponentFixture<PrivateLimitedCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateLimitedCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateLimitedCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
