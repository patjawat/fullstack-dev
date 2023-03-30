import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {

  form: FormGroup;
  files: string[] = [];
  sMsg: string = '';

  constructor(
    private _fb: FormBuilder,
    private uploadService: UploadService
  ) {
    this.form = _fb.group({
      fname: '',
      lname: '',
      cid: '',
      phone: '',
      file: '',
      fileUrl: ''
    })
  }
  onFileChange(event: any) {
    for (var i = 0; i < event.target.files.length; i++) {
      this.files.push(event.target.files[i]);
    }
  }
  onFormSubmit() {
    const frmData = new FormData();
    for (var i = 0; i < this.files.length; i++) {
      frmData.append("files", this.files[i]);
    }
    this.uploadService.create(frmData).subscribe((res) => {
      console.log(res
      );

    });

  }

}
