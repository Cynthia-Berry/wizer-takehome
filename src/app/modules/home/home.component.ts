import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ApiService} from "../../services/api/api.service";
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {Book} from "../../models/Book";
import {Category} from "../../models/Category";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  books!: Book[];

  constructor(private _apiService: ApiService, private _router: Router,
              private _formBuilder: FormBuilder,
  ) {
    this.getBooks();
  }

  ngOnInit(): void {
  }

  getBooks() {
    this._apiService.fetchBooks().subscribe(responseData => {
      this.books = responseData;
    })
  }

  openBook(id: string) {
    this._router.navigate(['/book/'])
  }
}
