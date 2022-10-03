import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './employee/index/index.component';
import { AddComponent } from './employee/add/add.component';
import { EditComponent } from './employee/edit/edit.component';
import { ListComponent } from './employee/list/list.component';

import { AngularMaterialModule } from '../../material.module'
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
  
    HomeComponent,
       IndexComponent,
       AddComponent,
       EditComponent,
       ListComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ]
})
export class DemoModule { }
