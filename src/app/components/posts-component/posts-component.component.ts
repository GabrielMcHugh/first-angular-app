import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts-component',
  templateUrl: './posts-component.component.html',
  styles: [
  ]
})
export class PostsComponentComponent implements OnInit {
  posts: any[]

  constructor(private service: PostsService) {
  }

  ngOnInit() {
    this.service.getPosts()
      .subscribe(response => {
        this.posts = (response as Array<Object>)
      })
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value }
    input.value = ''

    this.service.createPost(post)
      .subscribe(response => {
        post['id'] = (response as any).id;
        this.posts.splice(0, 0, post)
      })
  }

  updatePost(post) {
    this.service.updatePost(post)
      .subscribe(response => {
        console.log(response)
      })
  }

  deletePost(post) {
    this.service.deletePosts(post.id)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1)
    })
  }


}
