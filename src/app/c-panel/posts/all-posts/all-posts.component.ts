import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss']
})
export class AllPostsComponent implements OnInit {

  p = 0;

  constructor(private _apiServices: ApiService, public authService: AuthService) { }
  posts: any;
  ngOnInit(): void {
    this._apiServices.getAllPosts().subscribe((data: any) => {
      this.posts = data;
    })
  }

  deletePostByID(id: any) {
    this._apiServices.deletePostByID(id).subscribe((data) => {
    })
  }

}
