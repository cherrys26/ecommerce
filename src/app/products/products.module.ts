import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsPageRoutingModule } from './products-routing.module';

import { ProductsPage } from './products.page';
import { ProductPage } from './product/product.page';
import { CartModalPageModule } from '../cart/cartModal/cart-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsPageRoutingModule,
    CartModalPageModule
  ],
  declarations: [ProductsPage, ProductPage]
})
export class ProductsPageModule { }
