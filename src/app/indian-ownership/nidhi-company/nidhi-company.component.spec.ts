import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NidhiCompanyComponent } from './nidhi-company.component';

describe('NidhiCompanyComponent', () => {
  let component: NidhiCompanyComponent;
  let fixture: ComponentFixture<NidhiCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NidhiCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NidhiCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
