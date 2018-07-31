import { ControlBase } from './control-base';

export class DropdownControl extends ControlBase {
    options: { key: number| string , value: string }[] = [];

    constructor(options) {
        super(options);
        this.options = options['options'] || [];
        this.options.unshift({ key: '', value: '-- Please, select --'});
    }
}
