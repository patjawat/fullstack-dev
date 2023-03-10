import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {


  constructor(
    private _http: HttpClient,
    private authservice:AuthService
    ){}
  

  create(data:any):Observable<any>  {
    // const header = new HttpHeaders().set('Authorization Bearer ',this.authservice.GetToken()); // may be localStorage/sessionStorage
    //         const headers = { headers: header };
    return this._http.post('http://127.0.0.1:3000/api/post',data)
  }
}
