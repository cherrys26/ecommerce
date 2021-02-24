import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  title = '';
  rating = '';
  description = '';
  image = '';
  price = '';
  constructor(
    private router: Router,
    private http: HttpClient,
    public toastController: ToastController) { }

  getProd(id): void {
    this.http.get(`http://localhost:3000/api/products/${id}`)
      .subscribe(data => {
        console.log(data);
        this.title = data['title']
        this.rating = data['rating']
        this.description = data['description']
        this.image = data['image']
        this.price = data['price']
      })
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Added to Cart!',
      duration: 5000,
      position: 'bottom',
      buttons: [
        {
          side: 'start',
          icon: 'bag-check',
        }, {
          text: 'View Cart',
          handler: () => {
            open("../cart/cart");
          }
        }
      ]
    });
    toast.present();
  }

  ngOnInit() {
    this.getProd(window.location.href.substr(window.location.href.lastIndexOf('/') + 1));
    console.log(this.router.url);
  }

}
