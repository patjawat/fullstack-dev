import { Component } from '@angular/core';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.component.html',
  styleUrls: ['./ex1.component.scss']
})
export class Ex1Component {

  sumTotal: number = 0;
  result: number = 0;

  clickMe(val:string){
    if(val === ''){
      alert('กรอกข้อมูล')
    }else{
      console.log(val);
      this.sumTotal = (Number(val)/4)
      this.result = this.sumTotal;


    }

    
  }

}
