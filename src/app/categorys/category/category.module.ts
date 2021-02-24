import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ProductsPage } from '../../products/products.page';

import { CategoryPageRoutingModule } from './category-routing.module';
import { CategoryPage } from './category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryPageRoutingModule,
  ],
  declarations: [CategoryPage, ProductsPage]
})
export class CategoryPageModule { }
