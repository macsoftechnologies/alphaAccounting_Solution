import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdsReturnFillingComponent } from './tds-return-filling.component';

describe('TdsReturnFillingComponent', () => {
  let component: TdsReturnFillingComponent;
  let fixture: ComponentFixture<TdsReturnFillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdsReturnFillingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TdsReturnFillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
