import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  constructor(private http: HttpClient) { }

  products: any = [];

  runHttp() {
    this.http.get('http://localhost:3000/api/products').subscribe(data => { console.log(data); this.products = data; })
  }

  ngOnInit() {
    this.runHttp();
  }

}
