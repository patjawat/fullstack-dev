import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  api = 'https://dummyjson.com/products';
  constructor(
    private _http: HttpClient
  ) { }

   getAll() {
    return  this._http.get<any>(this.api);
  }
}
