import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


interface Category {
  value: number;
  text: string;
}

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.scss']
})
export class FormPostComponent implements OnInit {

  form: FormGroup;
  
  constructor(
    private _fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { 
    this.form = _fb.group({
      title: '',
      content: '',
      category: '',
    })
  }

  category: Category[] = [
    { value: 1, text: 'Steak' },
    { value: 2, text: 'Pizza' },
    { value: 3, text: 'Tacos' },
  ];


  ngOnInit(): void {
    this.loadInitialForm()
    
  }
  
  loadInitialForm(){
    
    console.log('Open');
  }

  onFormSubmit() {
    console.log(this.form.value);
    
  }

}
