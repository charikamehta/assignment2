import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) {  }
    getProducts():Observable<any>{
      return this.http.get('../../../assets/json/products.json');
   
  }
}
