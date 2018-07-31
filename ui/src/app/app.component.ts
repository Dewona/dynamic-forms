import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  Location,
  LocationStrategy,
  PathLocationStrategy
} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
  nav {
    margin-bottom: 20px;
    background-color: #e3f2fd;
  }
  .nav-icon{
    font-size: 18px;
  }
`
  ]
})
export class AppComponent implements OnInit {
  isRoot: boolean;

  constructor(private router: Router, private location: Location) {}

  ngOnInit() {


    this.router.events.subscribe(event => {
      if (
        this.location.path() === '' ||
        this.location.path() === '/home'
      ) {
        this.isRoot = true;
      } else {
        this.isRoot = false;
      }
    });
  }
  goBack() {
    if (!this.isRoot) {
      this.location.back();
    }
  }

  goForward() {
    this.location.forward();
  }
}
