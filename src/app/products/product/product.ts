import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const STORAGE_KEY = 'product';

@Injectable()
export class ProdProvider {

    constructor(public storage: Storage) { }

    inCart(prodId) {
        return this.getProd().then(result => {
            return result && result.indexOf(prodId) !== -1;
        });
    }

    addToCart(prodId) {
        return this.getProd().then(result => {
            if (result) {
                result.push(prodId);
                return this.storage.set(STORAGE_KEY, result);
            } else {
                return this.storage.set(STORAGE_KEY, [prodId]);
            }
        });
    }


    increaseCart() {

    }

    decreaseCart() {

    }

    removeFromCart(prodId) {
        return this.getProd().then(result => {
            if (result) {
                var index = result.indexOf(prodId);
                result.splice(index, 1);
                return this.storage.set(STORAGE_KEY, result);
            }
        });
    }

    getProd() {
        return this.storage.get(STORAGE_KEY);
    }

}