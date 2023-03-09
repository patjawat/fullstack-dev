import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor(
    private http:HttpClient
  ) { }

  posts = new Array<any>();

  ngOnInit(): void {
  }

  // async getEmployees() {
  //   await this.employeeService.getAll().subscribe( async response => {
  //     this.posts = await response;
  //     console.log(response);
  // });

  async submit(){
    // alert('Hello');
    const data = await  this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe( async response => {
      console.log(response);
    });

  }

}
