import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BookRetailComponent } from './book-retail/book-retail.component';
import { FormsModule } from '@angular/forms';
import { BookProductsComponent } from './book-products/book-products.component';
import { BookHelperService } from './book-helper.service';
import { BackgroundBlue } from './book-products/background-blue';
import { MultiplyTenPipe } from './book-products/multiplyTen.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BookProductsComponent,
    BackgroundBlue,
    MultiplyTenPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BookRetailComponent
  ],
  providers: [
    BookHelperService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
