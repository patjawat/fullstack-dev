import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module'

// add component
import { NavTopComponent } from './layouts/nav-top/nav-top.component';
import { FooterComponent } from './layouts/footer/footer.component';

// add module

import {DemoModule} from './modules/demo/demo.module'

@NgModule({
  declarations: [
    AppComponent,
    NavTopComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule, // new Config
    DemoModule // new config

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
