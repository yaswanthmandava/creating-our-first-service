import { Component, VERSION, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  posts = [];
  constructor(private appService: AppService) {}
  ngOnInit() {
    this.posts = this.appService.getPosts();
  }
}
