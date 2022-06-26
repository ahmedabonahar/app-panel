import { AllPostsComponent } from './posts/all-posts/all-posts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: ()=> import("./posts/posts.module").then(m => m.PostsModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CPanelRoutingModule { }
