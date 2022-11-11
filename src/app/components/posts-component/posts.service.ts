import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url = 'https://jsonplaceholder.typicode.com/posts'
  posts: any

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url)
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post))
  }

  updatePost(post) {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify)
  }

  deletePosts(id) {
    return this.http.delete(this.url + '/' + id)
  }

}
