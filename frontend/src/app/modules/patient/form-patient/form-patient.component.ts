import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { PatientService } from 'src/app/core/services/patient.service';

@Component({
  selector: 'app-form-patient',
  templateUrl: './form-patient.component.html',
  styleUrls: ['./form-patient.component.scss']
})
export class FormPatientComponent {
  form: FormGroup;
  
  constructor(
    private patientService: PatientService,
    private _fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,

  ) { 
    this.form = _fb.group({
      fname: '',
      lname: '',
      cid: '',
      phone:'',
      fileSource:''
    })
  }

  onFormSubmit() {
    const formData = new FormData();
    // formData.append('fname', this.form.get('fname')?.value);  
    formData.append('file', this.form.get('fileSource')?.value);
    formData.append('data', this.form.value);
      this.patientService.create(formData).subscribe((res)=>{
        console.log(res)
      })
    // this.http.post('http://localhost:8001/upload.php', formData)
    //   .subscribe(res => {
    //     console.log(res);
    //     alert('Uploaded Successfully.');
    //   })
    console.log(formData);
    
  }
  

  onSelectFile(event:any){
    // const file = event.target.files[0]
    // console.log(file);
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.patchValue({
        fileSource: file
      });
    }
    
  }
  uploadFileEvt(){

  }

}
