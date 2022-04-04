import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../../../services/api/api.service";
import {lastValueFrom} from "rxjs";
import {Category} from "../../../models/Category";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CategoryListComponent} from "../category-list/category-list.component";

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {
  params!: string;
  category!: Category;

  categoryForm!: FormGroup;

  public state = {
    isEdit: false,
  }

  constructor(private _activatedRoute: ActivatedRoute, private _apiService: ApiService,
              private _router: Router, private _formBuilder: FormBuilder,) {
    this.categoryForm = this._formBuilder.group(CategoryListComponent.CategoryFormData());
    this._activatedRoute.params.subscribe(async params => {
      this.params = params['id']
      params['id'] ? this.getCategory() : await this._router.navigate(['/home'])
    })
  }

  ngOnInit(): void {
  }

  async getCategory() {
    const responseData = await lastValueFrom(this._apiService.fetchCategory(this.params));
    if (responseData) {
      this.category = responseData;
      this.categoryForm = this._formBuilder.group({
        name: [responseData?.name, Validators.required],
        description: [responseData?.description],
        isFavorite: [responseData?.isFavorite],
      })
    }
  }

  editCategory() {
    this._apiService.updateCategory(this.params, this.categoryForm.value).subscribe(async responseData => {
      await this.getCategory();
    })
  }

  deleteCategory() {
    this._apiService.deleteCategory(this.params).subscribe(async responseData => {
      await this._router.navigate(['/category'])
    })
  }

  toggleEdit() {
    this.state.isEdit = !this.state.isEdit
  }
}
