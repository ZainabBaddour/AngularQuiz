import { Component, OnInit } from '@angular/core';
import { album } from 'src/app/models/album.model';
import { AlbumsService } from 'src/app/services/albums.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css']
})
export class AlbumsListComponent implements OnInit {

  albums!: album[];
  p: number = 1;
  start : number = 0;
  last : number = 0;
  constructor(private albumsService : AlbumsService) { }

  ngOnInit(): void {

    this.albumsService.getAlbums().subscribe(res => {
      this.albums = res;  //update the parameters
    });
  }
  listCount(count: number) {
    this.start = count
    this.start = this.start * 10 - 9
    this.last = count * 10
    if (this.last > this.albums.length) {
      this.last = this.albums.length;
    }
    console.log('start'+ '      '+this.start + '      '+'last' + '      '+ this.last);
  }

}
