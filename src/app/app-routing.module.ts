import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./modules/home/home.component";
import {BookListComponent} from "./modules/book/book-list/book-list.component";
import {BookDetailsComponent} from "./modules/book/book-details/book-details.component";
import {CategoryListComponent} from "./modules/category/category-list/category-list.component";
import {CategoryDetailComponent} from "./modules/category/category-detail/category-detail.component";


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home', component: HomeComponent,
  },
  {
    path: 'book', component: BookListComponent,
  },
  {
    path: 'book/:id', component: BookDetailsComponent,
  },
  {
    path: 'category', component: CategoryListComponent,
  },
  {
    path: 'category/:id', component: CategoryDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
