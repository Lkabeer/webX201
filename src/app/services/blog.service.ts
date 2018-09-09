import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: Http) { }

  getPostData(id: number) {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id)
                    .pipe(map(res => res.json()));
  }

  getPostPhoto(id: number) {
    return this.http.get('https://jsonplaceholder.typicode.com/photos/' + id)
                    .pipe(map(res => res.json()));
  }

  getPostComments(id: number) {
    return this.http.get('https://jsonplaceholder.typicode.com/comments?postId=' + id)
                    .pipe(map(res => res.json()));
  }

  sendComment(comment: any) {
    // this.http.post('', comment, fucntion(){});
  }
}