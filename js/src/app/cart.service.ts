import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  constructor(
    private http: HttpClient//注入服務的標配了
  ) {}

  /*
  addToCart() 方法會將產品附加到 items 陣列中。
  getItems() 方法會收集使用者加到購物車中的商品，並返回每個商品及其數量。
  clearCart() 方法返回一個空陣列。
  */
  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}