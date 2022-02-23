import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlbumDetailsComponent } from './shared/album-details/album-details.component';
import { AlbumsListComponent } from './shared/albums-list/albums-list.component';
import { PostCreateComponent } from './shared/post-create/post-create.component';
import { PostDetailsComponent } from './shared/post-details/post-details.component';
import { PostsListComponent } from './shared/posts-list/posts-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'posts', component: PostsListComponent},
  { path: 'post/:id', component: PostDetailsComponent },
  {path : 'addPost' , component : PostCreateComponent},
  { path: 'albums', component: AlbumsListComponent},
  { path: 'album/:id', component: AlbumDetailsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
