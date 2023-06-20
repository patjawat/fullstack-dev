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
import {MatLegacyDialogModule as MatDialogModule} from '@angular/material/legacy-dialog';
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
    AngularMaterialModule
  ]
})
export class HrModule { }
