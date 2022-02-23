import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, filter, map, Observable, tap } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { album } from '../models/album.model';
import { PostComment } from '../models/comment.model';
import { Photo } from '../models/photo.model';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  Url = "https://jsonplaceholder.typicode.com"

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  getPosts(): Observable<Post[]> { //get all the pages
    return this._http.get<Post[]>(this.Url + '/posts')
  }
  getPost(id: number): Observable<Post> {
    return this._http.get<Post>(this.Url + '/posts/' + id)

  }
  getPostComments(id: number): Observable<PostComment[]> {
    return this._http.get<PostComment[]>(this.Url + '/posts/' + id + '/comments')

  }
  addPost(post: Post): Observable<Post> {
    return this._http.post<Post>(this.Url + '/posts', post, this.httpOptions)

  }


  constructor(private _http: HttpClient) { }
}
