import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', href: '/home/home', icon: 'home' },
    { title: 'Products', href: '/products/products', icon: 'bed-outline' },
    { title: 'Categorys', href: '/categorys/categorys', icon: 'paper-plane' },
    { title: 'Cart', href: '/cart/cart', icon: 'cart-outline' },
  ];

  constructor() { }
}
