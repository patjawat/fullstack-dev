import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms'
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  @Input() progress: any;
  
  constructor(
    private fb : FormBuilder
  ) { }

  ngOnInit(): void {
  }

  formEmployee = this.fb.group({
    fname:['',Validators.required],
    lname:[],
    cid:[],
    birthday:[],
    phone_number:[],
    photo:[],
    
  })
  
  onSubmit() {
    console.warn(this.formEmployee.value);
    alert(JSON.stringify(this.formEmployee.value))
  }
}
