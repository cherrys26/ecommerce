import { Component, OnInit } from '@angular/core';
import { ToastController, ModalController, NavParams, NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../../services/cart.service';
import { CartModalPage } from '../../cart/cartModal/cart-modal.page';
import { ProdProvider } from './product'

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  film: any;
  inCart = false;

  id = '';
  title = '';
  rating = '';
  description = '';
  image = '';
  price = '';

  constructor(
    private http: HttpClient,
    public toastController: ToastController,
    private modalCtrl: ModalController,
    public navCtrl: NavController,
    public prodProvider: ProdProvider,
    public navParams: NavParams) {
  }

  getProd(id) {
    this.http.get(`http://localhost:3000/api/products/${id}`)
      .subscribe(data => {
        console.log(data);
        this.title = data['title']
        this.rating = data['rating']
        this.description = data['description']
        this.image = data['image']
        this.price = data['price']
        this.id = data['id']
        this.prodProvider.inCart(this.id).then(cart => {
          this.inCart = cart;
          console.log(this.id);
        })
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
          text: 'Checkout',
          handler: () => {
            open("../cart/cart");
          }
        }
      ]
    });
    toast.present();
  }

  addToCart() {
    this.prodProvider.addToCart(this.id).then(() => {
      this.inCart = true;
      console.log(this.id);
    });
  }

  ngOnInit() {
    this.getProd(window.location.href.substr(window.location.href.lastIndexOf('/') + 1));
  }

  async openCart() {
    let modal = await this.modalCtrl.create({
      component: CartModalPage,
      cssClass: 'cart-modal'
    });
    modal.onWillDismiss();
    modal.present();
  }

}
