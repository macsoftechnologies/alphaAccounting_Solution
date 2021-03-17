import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducerCompanyComponent } from './producer-company.component';

describe('ProducerCompanyComponent', () => {
  let component: ProducerCompanyComponent;
  let fixture: ComponentFixture<ProducerCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducerCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducerCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
