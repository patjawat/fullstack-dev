import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.scss']
})
export class FormPostComponent implements OnInit {

  postForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private postService: PostService
  ) {
 this.postForm = _fb.group({
    title: '',
    content: '',
    category: '',
  })
  }
    
    
    
    
  ngOnInit(): void {
  }

  onFormSubmit() {
    // console.log(this.postForm.value)
    // if (this.empForm.valid) {
    //   if (this.data) {
    //     this.employeeService.updateEmp(this.data.id,this.empForm.value).subscribe({
    //       next: (val: any) => {
    //         this._dialogRef.close(true);
    //       },
    //       error: (err: any) => {
    //         console.error(err);
    //       },

    //     });
    //   } else {

        this.postService.create(this.postForm.value).subscribe({
          next: (val: any) => {
            console.log('success')
          },
          error: (err: any) => {
            console.error(err);
          },

        });
    //   }
    // }


  }
 

}
