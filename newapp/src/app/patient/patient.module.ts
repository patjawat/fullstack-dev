import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientComponent } from './patient.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { AngularMaterialModule } from '../material.module';


@NgModule({
  declarations: [
    PatientComponent,
    PatientFormComponent,
    
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    AngularMaterialModule
  ]
})
export class PatientModule { }
