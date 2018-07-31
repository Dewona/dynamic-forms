import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http, Response } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { DropdownControl } from '../controls/control-dropdown';
import { ControlBase } from '../controls/control-base';
import { TextboxControl } from '../controls/control-textbox';

import { dictionaryControlsTypes as dictionaryCT} from '../configs/dictionary-controls-types.config';

@Injectable()
export class ControlService {
    private apiHost = 'http://localhost:11258'; // Host to web api
    private apiURL = '/api/values';
    headers: Headers = new Headers({ 'Content-Type': 'application/json' });
    options: RequestOptions = new RequestOptions({ headers: this.headers });

    constructor(private http: Http) { }

    getControls(controlValues: Object[], controlsConfig): Object[] {
        // construct configs array
        const controls: ControlBase[] = this.constructConfig(controlsConfig);

        // transform controls array to object where keys = idx's of controls and values = controls itself
        const ctrlObj = controls.reduce((res, cur) => ({ ...res, [cur['key']]: cur }), {});
        controlValues.forEach(c => {
          try {
          ctrlObj[c['key']].value = c['value'];
          } catch (ex) {
            console.error(`'key' `, c['key'], 'does not exist in controls values\n', ex);
          }
        });

        console.log('controls: ', controls);
        return controls.sort((a, b) => a.id - b.id);
    }

    private constructConfig(controlsConfig): ControlBase[] {
        const controls: ControlBase[] = [];

        for (const conf of controlsConfig) {
          try {
            let ctr: ControlBase;
            ctr = this.userFactory(dictionaryCT.find(item => item.key === conf.type).type, conf);
            controls.push(ctr);
          } catch (ex) {
            console.error(conf['key'], 'does not exist in controls definitions\n', ex);
          }
        }
        console.log('controls: ', controls);
        return controls.sort((a, b) => a.id - b.id);
    }

    private userFactory(type: { new (params: object): ControlBase; }, conf: object): any {
        return new type(conf);
    }
}





