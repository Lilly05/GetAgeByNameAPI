import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import {GuesserComponent} from "./guesser/guesser.component";
import {FormsModule} from "@angular/forms";
import { NavigationComponent } from './navigation/navigation.component';
import { DomainSearchComponent } from './domain-search/domain-search.component';


@NgModule({
  declarations: [
    AppComponent,
    GuesserComponent,
    GuesserComponent,
    NavigationComponent,
    DomainSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
