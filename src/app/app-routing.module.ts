import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'home/:id',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'products/:id',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsPageModule)
  },
  {
    path: 'categorys/:id',
    loadChildren: () => import('./categorys/categorys.module').then(m => m.CategorysPageModule)
  },
  {
    path: 'category/:title',
    loadChildren: () => import('./categorys/category/category.module').then(m => m.CategoryPageModule)
  },
  {
    path: 'cart/:id',
    loadChildren: () => import('./cart/cart.module').then(m => m.CartPageModule)
  },
  {
    path: 'product/:id',
    loadChildren: () => import('./products/product/product.module').then(m => m.ProductPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
