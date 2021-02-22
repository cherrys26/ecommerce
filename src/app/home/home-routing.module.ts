import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategorysPage } from '../categorys/categorys.page';
import { ProductsPage } from '../products/products.page';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: '',
    component: CategorysPage
  },
  {
    path: '',
    component: ProductsPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule { }
