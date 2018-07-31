import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ControlBase } from '../controls/control-base';

@Component({
  selector: 'app-control-component',
  templateUrl: './dynamic-form-control.component.html',
  styles: [
    `
      .error-message {
        color: red;
        font-weight: bold;
      }
    `
  ]
})
export class DynamicFormControlComponent {
  @Input() control: ControlBase;
  @Input() form: FormGroup;
  errorMessage = '';

  get isValid() {
    if (!this.form.controls[this.control.key].valid) {
      const formCtr = this.form.controls[this.control.key];
      if (Object.getOwnPropertyNames(formCtr.errors)[0] === 'pattern') {
        this.errorMessage = this.control.label + ' not following the pattern';
      }
      if (Object.getOwnPropertyNames(formCtr.errors)[0] === 'required') {
        this.errorMessage = this.control.label + ' is required';
      }
    }
    return this.form.controls[this.control.key].valid;
  }
}
