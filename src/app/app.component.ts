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
      console.log(this.cartItems);
    });
  }

  addNewItem(form) {
    this.cartService.addItem({...form.value}).subscribe(response => {
      this.cartItems = response;
    });
  }

  deleteAnItem(id) {
    this.cartService.deleteItem(id).subscribe(response => {
      this.cartItems = response;
    });
  }

  updateAnItem(item) {
    console.log(item);
    this.cartService.updateItem(item).subscribe(response => {
      this.cartItems = response;
    });
  }

  toggleForm(index) {
    this.cartItems[index].beingUpdated = !this.cartItems[index].beingUpdated;
    console.log(this.cartItems[index]);
  }
}
