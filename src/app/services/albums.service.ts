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
export class AlbumsService {
  Url = "https://jsonplaceholder.typicode.com"

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  getAlbum(id: number): Observable<album> {
    return this._http.get<album>(this.Url + '/albums/' + id)

  }
  getAlbums(): Observable<album[]> { 
    return this._http.get<album[]>(this.Url + '/albums')
  }
  getAlbumPhotos(id:Number): Observable<Photo[]> { 
    return this._http.get<Photo[]>(this.Url + '/photos')
    .pipe (
      map(res => 
       res.filter(res => res.albumId == id)) )
     }
  constructor(private _http: HttpClient) { }
}
