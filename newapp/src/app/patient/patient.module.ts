import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientComponent } from './patient.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { AngularMaterialModule } from '../material.module';
import { PatientListComponent } from './patient-list/patient-list.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [
    PatientComponent,
    PatientFormComponent,
    PatientListComponent,
    
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    AngularMaterialModule,
  ]
})
export class PatientModule { }
