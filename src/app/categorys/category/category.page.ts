import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  constructor(private route: Router,
    private http: HttpClient) { }

  category: any = [];

  runCategory(title) {
    this.http.get(`http://localhost:3000/api/categorys/${title}`).subscribe(data => { console.log(data); this.category = data; })
  }

  ngOnInit() {
    console.log(this.route.url);
    this.runCategory(window.location.href.substr(window.location.href.lastIndexOf('/') + 1));
  }

}
