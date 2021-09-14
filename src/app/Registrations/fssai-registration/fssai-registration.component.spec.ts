import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FSSAIRegistrationComponent } from './fssai-registration.component';

describe('FSSAIRegistrationComponent', () => {
  let component: FSSAIRegistrationComponent;
  let fixture: ComponentFixture<FSSAIRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FSSAIRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FSSAIRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
