import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'newapp';
  width: number = 100;
  height: number = 100;
  
  constructor() {}


  
  ngOnInit(): void {
  }

  testNumberChang(event:number){
    console.log('NumberChang',event);
    this.height = event;
    
  }

}
