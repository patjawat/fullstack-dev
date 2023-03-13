import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private http: HttpClient
  ) { }

  
  public getAll(): Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get<any>(url);
}

  // getPeople(): Observable<Employee[]> {
    // console.log('getPeople '+this.baseURL + 'people')
    // return this.http.get<Person[]>(this.baseURL + 'people')
  // }
  // async getAll() {
  //   await this.http.get('https://jsonplaceholder.typicode.com/postsposts')
  //   .subscribe((response)=>{
  //     // alert(JSON.stringify(response));
  //     return response;
  //   });
  // }
}
