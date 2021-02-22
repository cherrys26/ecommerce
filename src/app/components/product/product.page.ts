import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  constructor(private prod: HttpClient) { }

  product: any = []

  getProd() {
    this.prod.get(`http://localhost:3000/api/products/:id`).subscribe(data => { console.log(data), this.product = data; })
  }

  ngOnInit() {
    this.getProd();
    console.log(this.product)
  }

}
