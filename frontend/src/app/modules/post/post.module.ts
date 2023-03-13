import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { FormPostComponent } from './form-post/form-post.component';
import { AngularMaterialModule } from 'src/app/material.module';
import { PostListComponent } from './post-list/post-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PostComponent,
    FormPostComponent,
    PostListComponent,
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    SharedModule
  ]
})
export class PostModule { }
