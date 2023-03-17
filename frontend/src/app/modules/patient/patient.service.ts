/*
https://docs.nestjs.com/providers#services
*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class PatientService {
    
     apiurl='http://localhost:3000/patients';

    constructor(
        private _http: HttpClient
    ) {
    }

    getPatients():Observable<any>{
        return this._http.get(this.apiurl);
      }
}
