import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientComponent } from './patient.component';
import { FormPatientComponent } from './form-patient/form-patient.component';
import { AngularMaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    PatientComponent,
    FormPatientComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    AngularMaterialModule
  ]
})
export class PatientModule { }
