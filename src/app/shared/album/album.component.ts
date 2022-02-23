import { Component, Input, OnInit } from '@angular/core';
import { album } from 'src/app/models/album.model';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  
  @Input()
  data!: album;

  constructor() { }

  ngOnInit(): void {

  }


}
