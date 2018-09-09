import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { Observable, forkJoin } from "rxjs";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  providers: [ BlogService ]
})
export class BlogComponent implements OnInit {

  id: number = 0;
  title: string = '';
  photo: string = '';
  body: string = '';
  comments: any[];

  newComment: any = {
    postId: 0,
    id: 0,
    name: '',
    body: '',
    email: ''
  }

  constructor(private activatedRoute: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    forkJoin(
      this.blogService.getPostData(this.id),
      this.blogService.getPostPhoto(this.id),
      this.blogService.getPostComments(this.id)
    ).subscribe(
      data => {
        this.title = data[0].title;
        this.body = data[0].body;
        this.photo = data[1].url;
        this.comments = data[2];
      }
    ); 

    this.newComment['postId'] = this.activatedRoute.snapshot.params['id'];
  }

  setComment(form: any) {
    console.log(form);
    console.log(this.newComment);
  }
}