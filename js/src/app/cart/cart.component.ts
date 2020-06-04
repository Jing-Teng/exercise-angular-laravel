import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';
//元件使用服務 1.import 2.constructor 注入

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;

  constructor(
    private cartService: CartService,//注入 CartService，以便購物車元件可以使用它
    private formBuilder: FormBuilder,
  ) { 
    //使用 FormBuilder 的 group() 方法來建立表單模型
      this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });          
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  /*
  clearCart() 方法
  把資料提交給外部伺服器
  清空購物車專案，並在提交完之後重置該表單
  */
  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
}