import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Book} from "../../../models/Book";
import {ApiService} from "../../../services/api/api.service";
import {Router} from "@angular/router";
import {Category} from "../../../models/Category";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books !: Book[];
  bookForm!: FormGroup;

  static BookFormData() {
    return {
      name: ['', Validators.required],
      description: '',
      isFavorite: false,
    }
  }

  constructor(private _apiService: ApiService, private _router: Router,
              private _formBuilder: FormBuilder,
  ) {
    this.getBooks();
    this.bookForm = this._formBuilder.group(BookListComponent.BookFormData())
  }

  ngOnInit(): void {
  }

  getBooks() {
    this._apiService.fetchBooks().subscribe(responseData => {
      this.books = responseData;
    })
  }

  openBook(id: string) {
    this._router.navigate([`/book/${id}`]);
  }

  addBook() {
    this._apiService.createBook(this.bookForm.value).subscribe(responseData => {
      //Add newly created book without making an Api call.
      this.books.unshift(<Book>responseData);
    })
  }

}
