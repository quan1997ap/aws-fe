import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroupValidatorComponent } from './form-group-validator.component';

describe('FormGroupValidatorComponent', () => {
  let component: FormGroupValidatorComponent;
  let fixture: ComponentFixture<FormGroupValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGroupValidatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormGroupValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
