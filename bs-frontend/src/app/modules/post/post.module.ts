import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { FormPostComponent } from './form-post/form-post.component';
import { ListPostComponent } from './list-post/list-post.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { TokenInterceptorService } from 'src/app/core/auth/service/token-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    PostComponent,
    FormPostComponent,
    ListPostComponent,
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [CookieService,{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true}],
})
export class PostModule { }
