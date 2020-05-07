import { Component, OnInit, Input } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { HttpService } from "src/app/services/http.service";
@Component({
  selector: "app-cart-page",
  templateUrl: "./cart-page.component.html",
  styleUrls: ["./cart-page.component.scss"],
})
export class CartPageComponent implements OnInit {
  response: any = [];
  votes: any;

  cartArray: any = [];
  size: number;
  total: any;
  totalDiscount: number;
  amount: any;

  constructor(private http: HttpService) {
    this.http.getProducts().subscribe((res: any) => {
      this.response = res;

      console.log(this.response);
    });
    this.cartArray = JSON.parse(localStorage.getItem("cartArray"));
    console.log(this.cartArray);

    console.log(this.sizeCalc(this.cartArray));
    this.votes = 1;
    this.Sum();
    this.Discount();
    this.Payable();
  }

  ngOnInit() {}

  onIncrement(item) {
    item.quantity++;

    this.Sum();
    this.Discount();
    this.Payable();
    this.size++;
  }

  onDecrement(item) {
    item.quantity -= 1;
    if (item.quantity < 1) {
      item.quantity = 1;

      this.Sum();
      this.Discount();
      this.Payable();
      this.size--;
    }

    this.Sum();
    this.Discount();
    this.Payable();
    this.size--;
  }
  // getQuantity(quant){

  // }
  removeItem(item) {
    this.cartArray.splice(this.cartArray.indexOf(item), 1);

    this.size = this.size - item.quantity;

    this.Sum();
    this.Discount();
    this.Payable();
  }
  sizeCalc(data) {
    this.size = data.length;
    return this.size;
  }
  Sum() {
    let sum = 0;
    for (let i = 0; i < this.cartArray.length; i++) {
      sum =
        sum +
        parseInt(this.cartArray[i].originalPrice) *
          parseInt(this.cartArray[i].quantity);
    }
    this.total = sum;
  }
  // sumChange(item) {
  //   this.total =
  //     this.total + parseInt(item.originalPrice) * (parseInt(item.quantity) - 1);
  // }
  Discount() {
    let sum = 0;
    for (let i = 0; i < this.cartArray.length; i++) {
      sum =
        sum +
        parseInt(this.cartArray[i].originalPrice) *
          parseInt(this.cartArray[i].quantity) -
        parseInt(this.cartArray[i].newPrice) *
          parseInt(this.cartArray[i].quantity);
    }
    this.totalDiscount = sum;
  }
  Payable() {
    this.amount = this.total - this.totalDiscount;
  }
}
