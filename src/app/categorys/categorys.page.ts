import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-categorys',
  templateUrl: './categorys.page.html',
  styleUrls: ['./categorys.page.scss'],
})
export class CategorysPage implements OnInit {

  constructor(private route: HttpClient) { }

  categorys: any = []

  runRoute() {
    this.route.get('http://localhost:3000/api/categorys').subscribe(data => { console.log(data); this.categorys = data; })
  }

  ngOnInit() {
    this.runRoute()
  }

}
