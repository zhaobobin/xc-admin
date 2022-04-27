import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.less'],
  templateUrl: './pages.component.html',
})
export class PagesComponent {

  constructor(public router: Router) {}

  searchValue?: string;

  search = () => {
    console.log(this.searchValue)
  }

  logout() {
    this.router.navigate(['/auth']);
  }
}
