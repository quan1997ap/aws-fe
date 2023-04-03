import {
  Component,
  OnChanges,
  Input,
  ChangeDetectionStrategy,
  SimpleChanges,
  OnInit
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
export interface JsonFormValidators {
  min?: number;
  max?: number;
  required?: boolean;
  requiredTrue?: boolean;
  email?: string;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  nullValidator?: boolean;
}
export interface JsonFormControlOptions {
  min?: string;
  max?: string;
  step?: string;
  icon?: string;
}
export interface JsonFormControls {
  name: string;
  label: string;
  value: string;
  type: string;
  options?: JsonFormControlOptions;
  required?: boolean;
  validators: JsonFormValidators;
}
export interface JsonFormData {
  controls?: JsonFormControls[];
}
@Component({
  selector: 'app-json-form',
  templateUrl: './json-form.component.html',
  styleUrls: ['./json-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JsonFormComponent implements OnChanges {
  @Input() jsonFormData: JsonFormData | any;
  public myForm: FormGroup = this.fb.group({});
  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: any) {
    if (changes?.jsonFormData?.firstChange) {
      console.log(this.jsonFormData.controls)
      this.createForm(this.jsonFormData.controls);
    }
  }

  createForm(controls: JsonFormControls[]) {
    for (const control of controls) {
      const validatorsToAdd = [];
      for (const [key, value] of Object.entries(control?.validators)) {
        switch (key) {
          case 'min':
            validatorsToAdd.push(Validators.min(Number(value)));
            break;
          case 'max':
            validatorsToAdd.push(Validators.max(Number(value)));
            break;
          case 'required':
            if (value) {
              validatorsToAdd.push(Validators.required);
            }
            break;
          case 'requiredTrue':
            if (value) {
              validatorsToAdd.push(Validators.requiredTrue);
            }
            break;
          case 'email':
            if (value) {
              validatorsToAdd.push(Validators.email);
            }
            break;
          case 'minLength':
            validatorsToAdd.push(Validators.minLength(Number(value)));
            break;
          case 'maxLength':
            validatorsToAdd.push(Validators.maxLength(Number(value)));
            break;
          case 'pattern':
            // validatorsToAdd.push(Validators.pattern(value));
            break;
          case 'nullValidator':
            if (value) {
              validatorsToAdd.push(Validators.nullValidator);
            }
            break;
          default:
            break;
        }
      }
      this.myForm.addControl(
        control.name,
        this.fb.control(control.value, validatorsToAdd)
      );
    }
  }
  onSubmit() {
    console.log('Form valid: ', this.myForm.valid);
    console.log('Form values: ', this.myForm.value);
  }
}