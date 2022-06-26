import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-post-control',
  templateUrl: './post-control.component.html',
  styleUrls: ['./post-control.component.scss']
})

export class PostControlComponent implements OnInit {
  idParam: any;
  isAdded = false;
  postData: any;
  addForm: any;
  submitted = false;
  constructor(private _activeRoute: ActivatedRoute,
    private _apiServices: ApiService,
    private _FB: FormBuilder,
    public authService: AuthService,
    private location: Location
  ) {
    this._activeRoute.params.subscribe((params: any) => {
      this.idParam = params['id'];
      if (!!this.idParam) {
        this.getPostByID(params['id']);
        this.isAdded = false;
      } else {
        this.isAdded = true;
      }
    });
  }

  ngOnInit(): void {
    this.addForm = this._FB.group({
      title: ['', Validators.required],
      body: ['', [Validators.required, Validators.email]],
    })
  }

  getPostByID(id: any) {
    this._apiServices.getPostByID(id).subscribe((data: any) => {
      console.log(data);
      this.postData = data;
    })
  }

  addPost() {
    this.submitted = true;
    if (this.addForm.status == "INVALID") {
      alert('Post Added succesfully!!!\n Check the values in browser console.');
      console.table(this.addForm.value);
      this._apiServices.addPost(this.addForm.value).subscribe((data: any) => {
        console.log("dsadsfnbjjjjjjjjjj");
      })
    }
  }

  editPost() {
    this.submitted = true;
    console.log(this.addForm);
    if (this.addForm.status == "INVALID") {
      alert('Post Updated succesfully!!!\n Check the values in browser console.');
      console.table(this.addForm.value);
      let paramJson = {
        title: this.addForm.value.title ? this.addForm.value.title : this.postData.title,
        body: this.addForm.body ? this.addForm.body : this.postData.body,
      }
      this._apiServices.editPostByID(this.idParam, paramJson).subscribe((data: any) => {
      })
    }
  }

  handleBack() {
    this.location.back();
  }
}
