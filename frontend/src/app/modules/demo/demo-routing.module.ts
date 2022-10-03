import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IndexComponent as EmployeeComponent } from './employee/index/index.component';


const routes: Routes = [
  { path: 'demo', component: HomeComponent, pathMatch: 'full' },
  { path: 'demo/employee', component: EmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
