import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url = 'http://localhost:3000/api/products/';
  constructor(private http: HttpClient) { }

  getDetails(id) {
    return this.http.get(`${this.url}?i=${id}`);
  }
}
