import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: '', component: MenuComponent, pathMatch: 'full' },
    ],
  },
  { path: 'patient', loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule) },
  { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
