import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post.component';
import { FormPostComponent } from './form-post/form-post.component';

const routes: Routes = [
  { path: '', component: PostComponent },
  { path: 'create', component: FormPostComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
