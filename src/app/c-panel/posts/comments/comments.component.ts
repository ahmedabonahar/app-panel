import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  comment: any;

  constructor(private _activeRoute: ActivatedRoute, private _apiServices: ApiService, private _FB: FormBuilder,public authService: AuthService
    ,private location: Location
    ) {
      this._activeRoute.params.subscribe((params: any) => {
        this.getCommentsByPostID(params['id']);
      })
  }


  ngOnInit(): void {
  }

  getCommentsByPostID(postId: any) {
    this._apiServices.getCommentsByPostID(postId).subscribe((data: any)=> {
      console.log(data);
      this.comment = data;
    })
  }


  handleBack() {
    this.location.back();
  }
}
