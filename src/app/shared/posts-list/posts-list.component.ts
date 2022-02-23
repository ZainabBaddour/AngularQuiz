import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts!: Post[];
  p: number = 1;
  start : number = 0;
  last : number = 0;
  constructor(private postService : PostsService) { }

  ngOnInit(): void {

    this.postService.getPosts().subscribe(res => {
      this.posts = res;  //update the parameters
    });
  }
  listCount(count: number) {
    this.start = count
    this.start = this.start * 10 - 9
    this.last = count * 10
    if (this.last > this.posts.length) {
      this.last = this.posts.length;
    }
    console.log('start'+ '      '+this.start + '      '+'last' + '      '+ this.last);
  }

}
