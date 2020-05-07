import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { HttpService } from "src/app/services/http.service";
import { applySourceSpanToExpressionIfNeeded } from "@angular/compiler/src/output/output_ast";
@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"],
})
export class FilterComponent implements OnInit {
  @Output() filteredList = new EventEmitter<string>();
  low: number;
  high: number;
  response: any = [];
  newResponse: any = [];
  constructor(private http: HttpService) {
    this.http.getProducts().subscribe((res: any) => {
      this.response = res;

      console.log(this.response);
    });
  }

  ngOnInit() {}

  apply() {
    this.newResponse = [];
    console.log(this.low);
    console.log(this.high);
    for (let i = 0; i < this.response.length; i++) {
      if (
        (parseInt(this.response[i].newPrice) > this.low ||
          parseInt(this.response[i].newPrice) == this.low) &&
        (parseInt(this.response[i].newPrice) < this.high ||
          parseInt(this.response[i].newPrice) == this.high)
      ) {
        this.newResponse.push(this.response[i]);
      }
    }
    console.log(this.newResponse);
    this.filteredList.emit(this.newResponse);
  }
}
