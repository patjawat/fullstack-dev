import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, retry, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Post } from 'src/app/shared/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  apiurl='http://127.0.0.1:3000/api/';
  

  constructor(
    private http:HttpClient,
  ) { }

  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
  
  getAll(): Observable<Post> {
    return this.http
      .get<Post>(this.apiurl + '/employees')
      .pipe(retry(1), catchError(this.handleError));
  }

}
