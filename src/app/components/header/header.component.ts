import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<header>
  <div class="header-container">
    <div class="header-brand pb-2">
      <a routerLink="/home">
        <h3 class="m-0 p-0">Bookish</h3>
        <small class="m-0 p-0">...more to share n' know</small>
      </a>
    </div>
    <nav class="header-links pt-1">
      <ul>
        <li class="display-inline pr-2"><a routerLink="/category">Categories</a></li>
        <li class="display-inline pr-2"><a routerLink="/book">Books</a></li>
      </ul>
    </nav>
  </div>
</header>
`,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
