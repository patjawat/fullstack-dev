import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent {

  @Input() step: number = 1;
  @Output() numberChanged = new EventEmitter();
  result: number = 0;


  increment(){
    this.result = this.result + this.step;
    this.numberChanged.emit(this.result);
  }

  decrement(){
    if(this.result >0){
      this.result = this.result - this.step;
    this.numberChanged.emit(this.result);

    }
  }
}
