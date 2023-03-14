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

  }



  openDialog() {
    this._dialog.open(FormPatientComponent);
  }
}
