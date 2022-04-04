import {Component, OnInit} from '@angular/core';
import {Category} from "../../../models/Category";
import {ApiService} from "../../../services/api/api.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categories !: Category[];
  categoryForm!: FormGroup;

  static CategoryFormData() {
    return {
      name: ['', Validators.required],
      description: '',
      isFavorite: false,
    }
  }

  constructor(private _apiService: ApiService, private _router: Router,
              private _formBuilder: FormBuilder,
  ) {
    this.getCategories();
    this.categoryForm = this._formBuilder.group(CategoryListComponent.CategoryFormData());
  }

  ngOnInit(): void {
  }

  getCategories() {
    this._apiService.fetchCategories().subscribe(responseData => {
      this.categories = responseData;
    })
  }

  openCategory(id: string) {
    this._router.navigate([`/category/${id}`]);
  }

  addCategory() {
    this._apiService.createCategory(this.categoryForm.value).subscribe(responseData => {
      //Add newly created category without making an Api call.
      this.categories.unshift(<Category>responseData);
    })
  }
}
