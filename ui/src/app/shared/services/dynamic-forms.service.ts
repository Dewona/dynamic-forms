import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http, Response } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
@Injectable()
export class DynamicFormsService {
  private host = 'http://localhost:3000';

  constructor(private http: Http) {}

  getFormDefs(sourceName) {
    return this.http
      .get(this.host + '/api/formDefs/' + sourceName + 'Definition' )
      .map((r: Response) => {
        console.log('defs: ', r.json());
        return r.json();
      });
  }

  getFormValues(sourceName) {
    return this.http
      .get(this.host + '/api/formValues/' + sourceName + 'Values')
      .map((r: Response) => {
        console.log('vals: ', r.json());
        return r.json();
      });
  }
}
