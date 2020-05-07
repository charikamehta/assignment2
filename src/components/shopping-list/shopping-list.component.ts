import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpService } from "src/app/services/http.service";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.scss"],
})
export class ShoppingListComponent implements OnInit {
  response: any = [];
  cartArray = [];

  img: any;
  searchText: string;
  constructor(private http: HttpService) {
    this.http.getProducts().subscribe((res: any) => {
      this.response = res;

      console.log(this.response);
    });
  }

  ngOnInit() {}
  updateFilter(searchText: string): void {
    this.searchText = searchText;
  }
  sortList(current: any) {
    this.response = current;
  }
  filterList(current1: any) {
    this.response = current1;
  }
  addToCart(data) {
    this.cartArray.push(data);
    localStorage.setItem("cartArray", JSON.stringify(this.cartArray));
  }
}
