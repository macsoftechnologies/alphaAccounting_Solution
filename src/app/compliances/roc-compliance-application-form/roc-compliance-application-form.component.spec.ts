import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocComplianceApplicationFormComponent } from './roc-compliance-application-form.component';

describe('RocComplianceApplicationFormComponent', () => {
  let component: RocComplianceApplicationFormComponent;
  let fixture: ComponentFixture<RocComplianceApplicationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RocComplianceApplicationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RocComplianceApplicationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
