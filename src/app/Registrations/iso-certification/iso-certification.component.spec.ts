import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ISOCertificationComponent } from './iso-certification.component';

describe('ISOCertificationComponent', () => {
  let component: ISOCertificationComponent;
  let fixture: ComponentFixture<ISOCertificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ISOCertificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ISOCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
