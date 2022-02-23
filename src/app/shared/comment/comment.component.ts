import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostComment } from 'src/app/models/comment.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

 @Input()
  data!: PostComment;

  constructor(private postService : PostsService,private route: ActivatedRoute){ }
  ngOnInit(): void {
  
  }

}
