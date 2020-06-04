import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(
    private route: ActivatedRoute, //注入路由
    private cartService: CartService //注入cartservice
  ) { }

  //訂閱路由引數
  ngOnInit() {
  this.route.paramMap.subscribe(params => {
    this.product = products[+params.get('productId')];
  });
  }

  /**
   * addToCart() 
  *接收當前的 product。
  *使用購物車服務的 addToCart() 方法把該商品新增到購物車中。
  *顯示一條訊息，表明你已經把一個商品加入了購物車。
   */
  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }
}