import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: Http) { 
  }

  getLastBlogs() {
    return this.http.get('https://jsonplaceholder.typicode.com/photos')
                    .pipe( map( res => res.json() ));
  }
}
