import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { HomeLayoutComponent } from './core/layouts/home-layout/home-layout.component';
import { LoginLayoutComponent } from './core/layouts/login-layout/login-layout.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '', component: HomeLayoutComponent,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'about', component: AboutComponent }
    ]
  },
  {
    path: '', component: LoginLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
