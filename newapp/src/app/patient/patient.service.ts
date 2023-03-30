import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private api = 'http://localhost:3000/api/patient';

  constructor(private _http: HttpClient) { }

  create(data:any):Observable<any>  {
    return this._http.post(`${this.api}/`,data)
  }
  

}
