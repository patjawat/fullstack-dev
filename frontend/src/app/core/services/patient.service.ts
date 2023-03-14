import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  apiurl='http://127.0.0.1:3000/api/patient';
  

  constructor(
    private _http:HttpClient,
  ) { }


  create(data:any):Observable<any>  {
    return this._http.post(this.apiurl,data)
  }

}
