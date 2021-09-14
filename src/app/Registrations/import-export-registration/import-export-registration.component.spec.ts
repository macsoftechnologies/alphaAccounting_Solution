import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportExportRegistrationComponent } from './import-export-registration.component';

describe('ImportExportRegistrationComponent', () => {
  let component: ImportExportRegistrationComponent;
  let fixture: ComponentFixture<ImportExportRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportExportRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportExportRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
