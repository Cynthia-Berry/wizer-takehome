import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";

import {HeaderComponent} from '../components/header/header.component';
import {FooterComponent} from '../components/footer/footer.component';

import {HomeComponent} from "../modules/home/home.component";
import {BookListComponent} from "../modules/book/book-list/book-list.component";
import {BookDetailsComponent} from "../modules/book/book-details/book-details.component";
import {CategoryListComponent} from "../modules/category/category-list/category-list.component";
import {CategoryDetailComponent} from "../modules/category/category-detail/category-detail.component";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BookListComponent,
    BookDetailsComponent,
    CategoryListComponent,
    CategoryDetailComponent
  ],
  exports: [
    CommonModule,
    BrowserModule,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BookListComponent,
    BookDetailsComponent,
    CategoryListComponent,
    CategoryDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ReactiveFormsModule
  ]
})

export class ComponentModule {
  static forRoot(): ModuleWithProviders<ComponentModule> {
    return {
      ngModule: ComponentModule,
    };
  }
}
