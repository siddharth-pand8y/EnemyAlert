import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ships';

  constructor(
    private router: Router
  ) {
    if(localStorage.length) {
      this.router.navigateByUrl(`country/${localStorage.getItem('countryCode')}/ships`);
    }
    else {
      this.router.navigateByUrl('country');
    }
  }
}
