import { ControlBase } from './control-base';

export class TextboxControl extends ControlBase {
    pattern: string;

    constructor(options) {
        super(options);
        this.pattern = options['pattern'] || '';
    }
}
