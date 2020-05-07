import { Component, OnInit ,EventEmitter,Output} from '@angular/core';
import {HttpService} from 'src/app/services/http.service'

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {
  @Output() sortedList = new EventEmitter<string>();
  response:any=[];
  constructor(private http:HttpService) { 
    this.http.getProducts().subscribe((res: any) => {
      this.response= res;
     
      console.log(this.response)
    });
  }

  ngOnInit() {
  }
high(){
  this.response = this.response.sort((low, high) => high.newPrice - low.newPrice);
  this.sortedList.emit(this.response);
}
low(){
  this.response = this.response.sort((low, high) => low.newPrice - high.newPrice);
  this.sortedList.emit(this.response);
}
discount(){
  this.response = this.response.sort((low, high) => high.discountRate - low.discountRate);
  this.sortedList.emit(this.response);
}
}
