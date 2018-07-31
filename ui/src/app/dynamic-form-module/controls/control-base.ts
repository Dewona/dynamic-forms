export class ControlBase {
    value: any;
    key: string;
    label: string;
    id: number;
    controlType: string;
    required: boolean;

    constructor(options: {
        value: any,
        key: string,
        label: string,
        id: number,
        type: string,
        required?: boolean
    }) {
        this.value = options.value;
        this.key = options.key;
        this.label = options.label;
        this.id = options.id;
        this.controlType = options.type;
        this.required = options.required;
    }
}
