import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private messageSource = new BehaviorSubject("");
  
  currentMessage = this.messageSource.asObservable();
  constructor() { 
    
  }
  changeMessage(data: any) {
    this.messageSource.next(data);
    console.log(data)
  }
}
