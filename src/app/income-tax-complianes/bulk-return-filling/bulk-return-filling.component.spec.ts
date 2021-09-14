import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkReturnFillingComponent } from './bulk-return-filling.component';

describe('BulkReturnFillingComponent', () => {
  let component: BulkReturnFillingComponent;
  let fixture: ComponentFixture<BulkReturnFillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkReturnFillingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkReturnFillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
