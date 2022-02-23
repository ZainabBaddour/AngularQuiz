import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Post } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {


  constructor(private Postservice: PostsService) {

  }
  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {

    console.log(f.value['title'])
    const post: Post = {
      id: 199919919,
      userId: 1,
      body: f.value['content'],
      title: f.value['title']
    };
    this.Postservice.addPost(post as Post)
      .subscribe(res => {
        console.log(res)
        if (res)
          window.alert('sucsess creation')
      });

  }




}
