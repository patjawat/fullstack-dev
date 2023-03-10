import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './employee/add/add.component';
import { IndexComponent as EmployeeComponent } from './employee/index/index.component';
import { HrComponent } from './hr.component';

const routes: Routes = [
  { path: '', component: HrComponent },
  { path:'employee', component:EmployeeComponent },
  { path:'employee/add',component: AddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrRoutingModule { }
