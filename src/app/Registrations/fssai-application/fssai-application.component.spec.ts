import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FSSAIApplicationComponent } from './fssai-application.component';

describe('FSSAIApplicationComponent', () => {
  let component: FSSAIApplicationComponent;
  let fixture: ComponentFixture<FSSAIApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FSSAIApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FSSAIApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
