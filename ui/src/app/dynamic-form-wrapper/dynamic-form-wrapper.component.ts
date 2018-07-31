import { Component } from '@angular/core';
import { DynamicFormsService } from './../shared/services/dynamic-forms.service';
import { shortFormDefinitionConfig } from './../shared/configs/short-form/short-form-definition.config';
import { shortFormValuesConfig } from './../shared/configs/short-form/short-form-values.config';
import { mediumFormDefinitionConfig } from './../shared/configs/medium-form/medium-form-definition.config';
import { mediumFormValuesConfig } from './../shared/configs/medium-form/medium-form-values.config';
import { largeFormDefinitionConfig } from './../shared/configs/large-form/large-form-definition.config';
import { largeFormValuesConfig } from './../shared/configs/large-form/large-form-values.config';

// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import { FormEndPoint } from './../shared/enums/FormEndPoint';

@Component({
  selector: 'app-dynamic-form-wrapper',
  templateUrl: './dynamic-form-wrapper.component.html',
  providers: [DynamicFormsService]
})

export class DynamicFormWrapperComponent {
  output = 'OUTPUT';
  streem: Observable<{ values: object; definition: object }>;

  constructor(private dynamicFormsService: DynamicFormsService) {}

  public makeRequests(formType: string) {
    // let res: object;
    const formDefinition = this.dynamicFormsService.getFormDefs(formType);
    const formValue = this.dynamicFormsService.getFormValues(formType);

    this.streem = Observable.combineLatest(formDefinition, formValue).map(s => {
      return {
      definition: s[0],
      values: s[1]
      };
    });
  }

  useConfig(formType) {
    switch (formType) {
      case FormEndPoint[FormEndPoint.shortForm]:
        this.streem = Observable.of({
            definition: shortFormDefinitionConfig,
            values: shortFormValuesConfig
          });
        break;

      case FormEndPoint[FormEndPoint.mediumForm]:
        this.streem = Observable.of({
          definition: mediumFormDefinitionConfig,
          values: mediumFormValuesConfig
        });
        break;

      case FormEndPoint[FormEndPoint.largeForm]:
        this.streem = Observable.of({
          definition: largeFormDefinitionConfig,
          values: largeFormValuesConfig
        });
        break;
    }
  }
  handleControlsData(formData) {
    console.log(formData);
    this.output = JSON.stringify(formData);
  }
}
