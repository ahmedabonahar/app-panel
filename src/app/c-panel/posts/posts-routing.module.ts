import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { PostControlComponent } from './post-control/post-control.component';

const routes: Routes = [
  {path: '', component: AllPostsComponent},
  {path: 'add-post', component: PostControlComponent},
  {path: 'edit-post/:id', component: PostControlComponent},
  {path: 'comments/:id', loadChildren: ()=> import("./comments/comments.module").then(m => m.CommentsModule)}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
