import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostControlComponent } from './post-control/post-control.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AllPostsComponent,
    PostControlComponent,
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class PostsModule { }
