import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './core/auth/guards/auth.guard';
import { RoleGuard } from './core/auth/guards/role.guard';

const routes: Routes = [
  {
    path: '', component: HomeLayoutComponent,
    // path: '', component: HomeLayoutComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'about', component: AboutComponent }
    ]
  },
  {
    path: '', component: LoginLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent }
    ], 
    // canActivate: [RoleGuard]

  },
  { path: 'hr', component: HomeLayoutComponent,
   loadChildren: () => import('./modules/hr/hr.module').then(m => m.HrModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
