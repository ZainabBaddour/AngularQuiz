import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostComment } from 'src/app/models/comment.model';
import { Post } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  comments!: PostComment[];
  post !: Post;
  constructor(private postService : PostsService,private route: ActivatedRoute){ }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postService.getPostComments(id).subscribe(res => {
      this.comments = res;  
    });
    this.postService.getPost(id).subscribe(res => {
      this.post = res;  
    });
  }

}
