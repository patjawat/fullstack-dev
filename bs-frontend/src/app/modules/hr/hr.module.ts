import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrRoutingModule } from './hr-routing.module';
import { HrComponent } from './hr.component';
import { IndexComponent } from './employee/index/index.component';
import { AddComponent } from './employee/add/add.component';
import { ViewComponent } from './employee/view/view.component';
import { ListComponent } from './employee/list/list.component';
import { EditComponent } from './employee/edit/edit.component';
import { AngularMaterialModule } from 'src/app/material.module';
import { TableModule } from 'primeng/table'; 
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  declarations: [
    HrComponent,
    IndexComponent,
    AddComponent,
    ViewComponent,
    ListComponent,
    EditComponent,
    
  ],
  imports: [
    CommonModule,
    HrRoutingModule,
    AngularMaterialModule,
    TableModule
  ]
})
export class HrModule { }
