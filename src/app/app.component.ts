import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public activatedRoute = '/';

  constructor(private router: Router) {
    this.router.events.subscribe(res => {
      if (res instanceof NavigationEnd) {
        this.activatedRoute = res.url;
      }
    });
  }
}
