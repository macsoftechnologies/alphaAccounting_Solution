import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocComplianceComponent } from './roc-compliance.component';

describe('RocComplianceComponent', () => {
  let component: RocComplianceComponent;
  let fixture: ComponentFixture<RocComplianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RocComplianceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RocComplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
