import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { album } from 'src/app/models/album.model';
import { PostComment } from 'src/app/models/comment.model';
import { Photo } from 'src/app/models/photo.model';
import { Post } from 'src/app/models/post.model';
import { AlbumsService } from 'src/app/services/albums.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {

  photos!: Photo[];
  album !: album;
  constructor(private albumsService : AlbumsService,private route: ActivatedRoute){ }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getAlbum(id).subscribe(res => {
      this.album = res;  
    });
    this.albumsService.getAlbumPhotos(id).subscribe(res => {
      this.photos = res;  
    });
  }

}
