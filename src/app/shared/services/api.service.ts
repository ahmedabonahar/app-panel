import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL = environment.baseURL;

  // reqHeader = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token') as string)
  //   });

    constructor(private http: HttpClient) { }

    // posts methods
    // =============
    // =============

    getAllPosts() : Observable<any> {
      return this.http.get(this.baseURL + '/posts');
    }

    deletePostByID(id: any) : Observable<any> {
      return this.http.delete(this.baseURL + '/posts/'+ id);
    }

    getPostByID(id: any) : Observable<any> {
      return this.http.get(this.baseURL + '/posts/'+ id);
    }

    editPostByID(id: any, data: any) : Observable<any> {
      return this.http.put(this.baseURL + '/posts/'+ id, data);
    }

    addPost(data: any) : Observable<any> {
      return this.http.post(this.baseURL + '/posts/', data);
    }

    getCommentsByPostID(id: any) : Observable<any> {
      return this.http.get(this.baseURL + '/comments/'+ id);
    }
  }
