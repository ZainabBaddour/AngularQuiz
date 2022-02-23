import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import {PostsService} from 'src/app/services/posts.service'
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  data!: Post;

  last_index = 100;
  showTxt = "Show More"

  counter = 100;

  toggleSkil() {




    if (this.counter < 101) {

      this.counter = this.data.body.length;

      this.showTxt = "Show less";
    

    }

    else {
      this.counter = this.last_index;

      this.showTxt = "Show More"
   }


  }



  firstCount = 100
  constructor(private postService : PostsService) {

  }

  ngOnInit(): void {
    this.last_index = (this.data.body.substring(0, 100)).lastIndexOf(' ');
    if (this.last_index > 100)
      this.last_index = 100;
    this.counter = this.last_index;

    console.log(this.data.title + 'im in pos')

    // this.postService.getPosts().subscribe(res => {
    //  // this.posts = res;  //update the parameters
    // });

  }

}
