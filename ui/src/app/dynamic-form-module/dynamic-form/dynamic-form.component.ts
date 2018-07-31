import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ControlBase } from '../controls/control-base';
import { ControlService } from '../services/control.service';

@Component({
    selector: 'app-dynamic-form',
    templateUrl: './dynamic-form.component.html',
    providers: [ControlService]
})
export class DynamicFormComponent implements OnInit {

    formControls = [];
    _controlValues;
    @Input()
    set controlValues(cv) {
      this._controlValues = cv;
      console.log('cv:', cv);
      this.constructForm();
    }
    _controlsConfig;
    @Input()
    set controlsConfig(cc) {
      this._controlsConfig = cc;
      console.log('cc:', cc);
      this.constructForm();
    }

    @Output() saveControlsData = new EventEmitter<Object[]>();
    form: FormGroup;

    constructor(private controlService: ControlService) {}
    ngOnInit() {

    }
    constructForm() {
      if (this._controlsConfig && this._controlValues) {
          this.formControls = this.controlService.getControls(this._controlValues, this._controlsConfig);
          this.form = this.toFormGroup(this.formControls);
        }
    }

    onSubmit() {
        // const dataForSend: Object[] = new Array();
        // this.formControls.forEach(function (control) {
        //         dataForSend.push({
        //             value: control.value,
        //             key: control.key
        //         });
        // });
        // this.saveControlsData.emit(dataForSend);
        this.saveControlsData.emit(this.form.value);
    }

    private toFormGroup(formControls: ControlBase[]) {
        const group: any = {};
        formControls.forEach(control => {
          const validations = [];

            if (control['pattern'] !== undefined && control['pattern'] !== '') {
                validations.push(Validators.pattern(control['pattern']));
            }

            if (control['required'] !== undefined && control['required'] !== false) {
              validations.push(Validators.required);
          }

            group[control.key] = new FormControl(control.value || '', validations);
        });

        return new FormGroup(group);
    }
}
