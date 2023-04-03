import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private api = 'http://localhost:3000/api/patient';

  constructor(private _http: HttpClient) { }


  getAll(): Observable<any> {
    return this._http.get(`${this.api}`);
  }
  getById(id:any): Observable<any> {
    return this._http.get(`${this.api}/${id}`)
  }

  create(data:any):Observable<any>  {
    return this._http.post(`${this.api}/`,data)
  }



  // update(id:any,data:any):Observable<any>  {
    
  //   return this._http.patch(`${this.api}/${id}`,data)
  // }

  update(id:any,data:any):Observable<any>  {
    return this._http.patch(`${this.api}/${id}`,data)
  }

  // async remove(id:any) {
  //   return await this._http.delete(`${this.api}/${id}`);
  // }
  remove(id: string): Observable<any> {
    return this._http.delete(`${this.api}/${id}`)
    
}


  
  

}
