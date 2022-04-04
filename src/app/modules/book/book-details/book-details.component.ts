import {Component, OnInit} from '@angular/core';
import {lastValueFrom} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../../../services/api/api.service";
import {Book} from "../../../models/Book";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BookListComponent} from "../book-list/book-list.component";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  params!: string;
  book!: Book;

  bookForm!: FormGroup;

  public state = {
    isEdit: false,
  }

  constructor(
    private _activatedRoute: ActivatedRoute, private _apiService: ApiService,
    private _router: Router, private _formBuilder: FormBuilder,
  ) {
    this.bookForm = this._formBuilder.group(BookListComponent.BookFormData())
    this._activatedRoute.params.subscribe(async params => {
      this.params = params['id']
      params['id'] ? this.getBook() : await this._router.navigate(['/home'])
    })
  }

  ngOnInit(): void {
  }

  async getBook() {
    const responseData = await lastValueFrom(this._apiService.fetchBook(this.params));
    if (responseData) {
      this.book = responseData;
      this.bookForm = this._formBuilder.group({
        name: [responseData?.name, Validators.required],
        description: [responseData?.description],
        isFavorite: [responseData?.isFavorite],
        imageUrl: [responseData?.imageUrl],
        title: [responseData?.title]
      })
    }
  }

  editBook() {
    this._apiService.updateBook(this.params,this.bookForm.value).subscribe(() => {
      this.getBook();
    })
  }

  deleteBook() {
    this._apiService.deleteBook(this.params).subscribe(async () => {
      this._router.navigate(['/book'])
    })
  }

  toggleEdit() {
    this.state.isEdit = !this.state.isEdit
  }
}
