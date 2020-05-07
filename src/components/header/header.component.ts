import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @Output() searchValueChanged: EventEmitter<string> = new EventEmitter<
    string
  >();
  searchText: string;
  constructor(private router: Router) {}

  ngOnInit() {}
  changedSearchText(): void {
    // emit the change so the parent component can see it
    this.searchValueChanged.emit(this.searchText);
  }
  toCart() {
    this.router.navigateByUrl("/cart");
  }
}
