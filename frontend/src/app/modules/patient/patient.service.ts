/*
https://docs.nestjs.com/providers#services
*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class PatientService {
    
     apiurl='http://localhost:3000/patients';

    constructor(
        private _http: HttpClient
    ) {
    }

    uploadFile(files: FormData) {
        return this._http.post(`${environment.API}/upload-avatar`, files, {
          reportProgress: true,
          observe: 'events'
        });
      }
      
    getPatients():Observable<any>{
        return this._http.get(this.apiurl);
      }
}
