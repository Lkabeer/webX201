import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'homeX',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ HomeService ]
})
export class HomeComponent implements OnInit {
  blogs: any = [];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getLastBlogs().subscribe(
      data => {
        for(var i=0; i<9; i++) {
          this.blogs.push(data[i]);
        }
      }
    );
  }

}
