import {Injectable} from '@angular/core';
import {environment as env} from "../../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../../models/Category";
import {Book} from "../../models/Book";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  BASE_URL = env.API_URL.BASE_URL;

  constructor(private _httpClient: HttpClient) {
  }

  /* CATEGORIES */
  fetchCategories(): Observable<Category[]> {
    return this._httpClient.get<Category[]>(`${(this.BASE_URL)}/categories/`);
  }

  fetchCategory(id: string): Observable<Category> {
    return this._httpClient.get<Category>(`${(this.BASE_URL)}/categories/${id}/`);
  }

  createCategory(payload: Partial<Category>): Observable<Partial<Category>> {
    return this._httpClient.post<Partial<Category>>(`${(this.BASE_URL)}/categories/`, payload);
  }

  updateCategory(id: string, payload: Partial<Category>): Observable<Partial<Category>> {
    return this._httpClient.put<Partial<Category>>(`${(this.BASE_URL)}/categories/${id}/`, payload);
  }

  deleteCategory(id: string) {
    return this._httpClient.delete<HttpResponse<any>>(`${this.BASE_URL}/categories/${id}/`, {observe: 'response'});
  }


  /* BOOKS */

  filterBooksByCategory(categoryId: string): Observable<Book[]> {
    return this._httpClient.get<Book[]>(`${(this.BASE_URL)}/books/?search=${categoryId}/`);
  }

  fetchBooks(): Observable<Book[]> {
    return this._httpClient.get<Book[]>(`${(this.BASE_URL)}/books/`);

  }

  fetchBook(id: string): Observable<Book> {
    return this._httpClient.get<Book>(`${(this.BASE_URL)}/books/${id}/`);

  }

  createBook(payload: Partial<Book>): Observable<Partial<Book>> {
    return this._httpClient.post<Partial<Book>>(`${(this.BASE_URL)}/books/`, payload);

  }

  updateBook(id:string, payload: Partial<Book>): Observable<Partial<Book>> {
    return this._httpClient.put<Partial<Book>>(`${(this.BASE_URL)}/books/${id}/`, payload);

  }

  deleteBook(id: string) {
    return this._httpClient.delete<HttpResponse<any>>(`${this.BASE_URL}/books/${id}/`, {observe: 'response'});
  }
}
