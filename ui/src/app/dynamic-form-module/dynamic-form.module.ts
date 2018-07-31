import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormControlComponent } from './dynamic-form-control/dynamic-form-control.component';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, HttpModule],
    declarations: [DynamicFormComponent, DynamicFormControlComponent],
    exports: [DynamicFormComponent]
})
export class DynamicFormModule {
    constructor() {
    }
}
