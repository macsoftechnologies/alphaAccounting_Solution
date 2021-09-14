import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeLicenseComponent } from './trade-license.component';

describe('TradeLicenseComponent', () => {
  let component: TradeLicenseComponent;
  let fixture: ComponentFixture<TradeLicenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradeLicenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
