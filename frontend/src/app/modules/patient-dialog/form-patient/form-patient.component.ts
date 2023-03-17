import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { CoreService } from 'src/app/core/core.service';
import { PatientService } from 'src/app/core/services/patient.service';

@Component({
  selector: 'app-form-patient',
  templateUrl: './form-patient.component.html',
  styleUrls: ['./form-patient.component.scss']
})
export class FormPatientComponent {
  form: FormGroup;
  fileUrl:any
  patientFiles:string [] = [];
  
  constructor(
    private patientService: PatientService,
    private _fb: FormBuilder,
    private _coreService: CoreService,
    private _dialogRef: MatDialogRef<FormPatientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

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
    this.form.patchValue(this.data)
    // this.fileUrl = this.data?.upload.filename
    console.log(this.data);
    
  }

  onFileChange(event:any) {
   
    for (var i = 0; i < event.target.files.length; i++) { 
        this.patientFiles.push(event.target.files[i]);
    }
}


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

      this.patientService.create(formData).subscribe({
        next: (beers) => {
          this._dialogRef.close(true);
          this._coreService.openSnackBar('ok','success');

        
        },
        error: (e) => {
          console.log(e);
        
        },
        complete: () => console.log('done'),
      });

    // if (this.form.valid) {
    //   if (this.data) {
    //     this.patientService.update(this.data.id,this.form.value).subscribe({
    //       next: (val: any) => {
    //         this._dialogRef.close(true);
    //       },
    //       error: (err: any) => {
    //         console.error(err);
    //       },

    //     });
    //   } else {

    //     this.patientService.create(formData).subscribe({
    //       next: (val: any) => {
    //         this._dialogRef.close(true);
    //       },
    //       error: (err: any) => {
    //         console.error(err);
    //       },
    //     });
    //   }
    // }

    // const formData = new FormData();
    // formData.append('file', this.form.get('file')?.value);
    // formData.append('fname', this.form.get('fname')?.value);
    // formData.append('lname', this.form.get('lname')?.value);
    // formData.append('cid', this.form.get('cid')?.value);
    // this.patientService.create(formData).subscribe((res)=>{
    //     console.log(res)
    //   })


  }
  

  onSelectFile(event:any){
    // const file = event.target.files[0]
    // console.log(file);
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.patchValue({
        file: file
      });
    }
    
  }
  uploadFileEvt(){

  }

}
