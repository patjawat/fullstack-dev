import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss']
})
export class PatientFormComponent {
  form: FormGroup;
  files: string[] = [];
  constructor(
    private _fb: FormBuilder,
    private patientService: PatientService

  ) { 
    this.form = _fb.group({
      fname: '',
      lname: '',
      cid: '',
      phone:'',
      file:'',
      fileUrl:''
    })
  }

  ngOnInit(): void {
    // this.form.patchValue(this.data)
    // console.log(this.data);
    
  }



  onFileChange(event: any) {
    for (var i = 0; i < event.target.files.length; i++) {
      this.files.push(event.target.files[i]);
    }
  }
  // onFormSubmit() {
  //   const frmData = new FormData();
  //   for (var i = 0; i < this.files.length; i++) {
  //     frmData.append("files", this.files[i]);
  //   }
  //   this.uploadService.create(frmData).subscribe((res) => {
  //     console.log(res
  //     );

  //   });

  // }

  onFormSubmit() {

    // const formData = new FormData();
    // for (var i = 0; i < this.patientFiles.length; i++) { 
    //   formData.append("file[]", this.patientFiles[i]);
    // }

    const formData = new FormData();
    formData.append('file', this.form.get('file')?.value);
    formData.append('fname', this.form.get('fname')?.value);
    formData.append('lname', this.form.get('lname')?.value);
    formData.append('cid', this.form.get('cid')?.value);
    for (var i = 0; i < this.files.length; i++) {
      formData.append("files", this.files[i]);
    }
      this.patientService.create(formData).subscribe({
        next: (res) => {
          // this._dialogRef.close(true);
          // this._coreService.openSnackBar('ok','success');

        console.log(res);
        
        },
        error: (e) => {
          console.log(e);
        
        },
        complete: () => console.log('done'),
      });
  }

}
