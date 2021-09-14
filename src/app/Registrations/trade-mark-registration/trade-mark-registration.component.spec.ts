import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeMarkRegistrationComponent } from './trade-mark-registration.component';

describe('TradeMarkRegistrationComponent', () => {
  let component: TradeMarkRegistrationComponent;
  let fixture: ComponentFixture<TradeMarkRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradeMarkRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeMarkRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
