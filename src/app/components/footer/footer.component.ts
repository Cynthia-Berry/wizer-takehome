import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer>
        <small>Copyright © {{getYear}} <a routerLink="/home">{{appName}}</a>.
          <a href="mailto:nwakaemecynthia@gmail.com" target="_blank" rel="noopener noreferrer"> {{author}} </a>All rights reserved.
        </small>
    </footer>`,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public appName: string = "Bookish";
  public author: string = "Cynthia Nwakaeme"
  public getYear: any = "";

  constructor() {
  }

  ngOnInit(): void {
    this.getYear = new Date().getFullYear();
  }

}
