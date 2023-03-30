import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private serverUrl = 'http://localhost:3000/api';

  constructor(private _http: HttpClient) { }


  create(data:any):Observable<any>  {
    return this._http.post(`${this.serverUrl}/uploads`,data)
  }

  // upload(file: File): Observable<HttpEvent<any>> {
  //   const formData: FormData = new FormData();

  //   formData.append('file', file);

  //   const request = new HttpRequest('POST', `${this.serverUrl}/upload`, formData, {
  //     reportProgress: true,
  //     responseType: 'json'
  //   });

  //   return this.httpClient.request(request);
  // }

  // getFiles(): Observable<any> {
  //   return this.httpClient.get(`${this.serverUrl}/files`);
  // }
}
