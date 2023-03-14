import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormPatientComponent } from './form-patient/form-patient.component';
import { PatientService } from 'src/app/core/services/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent {

  constructor(
    private _dialog : MatDialog,
    private patientService: PatientService,
  ) {

  }

  ngOnInit() {
    this.loadPatient();
  }

  loadPatient(){
    this.patientService.getAllPatient().subscribe({
      next: (res:any) =>{
        console.log(res);
      },error(err:any) {
      console.log(err);
      },
    });
  }

  openDialog() {
    this._dialog.open(FormPatientComponent);
  }
}
