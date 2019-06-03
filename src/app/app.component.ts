import { Component } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'expresslab';

  cartItems: any;

  constructor(private cartService: CartService) {
    this.cartService.getAllItems().subscribe(response => {
      this.cartItems = response;
    })
  };
}
