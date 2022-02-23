import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { PostsService } from '../services/posts.service';
import { PostComponent } from './post/post.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { RouterModule } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { CommentComponent } from './comment/comment.component';
import { MatIconModule } from '@angular/material/icon';
import { NgxPaginationModule } from 'ngx-pagination';
import { PostCreateComponent } from './post-create/post-create.component';
import { ToastrModule } from 'ngx-toastr';
import { AlbumsListComponent } from './albums-list/albums-list.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';


@NgModule({
  declarations: [

    PostComponent,
    PostsListComponent,
    PostDetailsComponent,
    AlbumComponent,
    CommentComponent,
    PostCreateComponent,
    PostCreateComponent,
    AlbumsListComponent,
    AlbumDetailsComponent
  ],
  imports: [

    MatCardModule,
    BrowserModule,
    RouterModule,
    MatIconModule,
    NgxPaginationModule,
    FormsModule,
    ToastrModule

  ],
  exports: [
    PostComponent,
    PostsListComponent,
    PostDetailsComponent,
    CommentComponent,
    PostCreateComponent
  ],
  providers: [PostsService],
  bootstrap: []
})
export class SharedModule { }
