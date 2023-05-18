import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListSurgeriesComponent } from './list-surgeries/list-surgeries.component';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarSecComponent } from './navbar-sec/navbar-sec.component';

@NgModule({
  declarations: [
    AppComponent,
    ListSurgeriesComponent,
    NavbarComponent,
    NavbarSecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
