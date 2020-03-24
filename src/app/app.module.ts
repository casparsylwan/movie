import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './components/movie/movie.component';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';

import { ClickColorDirective } from './models/click-color';
import { ConfirmOrderComponent } from './components/confirm-order/confirm-order.component';
import { ConfirmedComponent } from './components/confirmed/confirmed.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    CustomerDetailComponent,
    ClickColorDirective,
    ConfirmOrderComponent,
    ConfirmedComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
