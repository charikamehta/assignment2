import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HeaderComponent} from '../components/header/header.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FilterComponent} from '../components/filter/filter.component';
import {SortComponent} from '../components/sort/sort.component'
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {ShoppingListComponent} from '../components/shopping-list/shopping-list.component'
import { HttpClientModule } from '@angular/common/http';
import {FooterComponent} from '../components/footer/footer.component'
import {SearchPipe} from 'src/search.pipe'
import { FormsModule } from '@angular/forms';
import {CartPageComponent} from 'src/components/cart-page/cart-page.component'
import{DataService} from 'src/app/services/data.service'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterComponent,
    SortComponent,
    ShoppingListComponent,
    FooterComponent,
    SearchPipe,
    CartPageComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
