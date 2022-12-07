import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import {GuesserComponent} from "./guesser/guesser.component";
import {FormsModule} from "@angular/forms";
import { NavigationComponent } from './navigation/navigation.component';
import { HarryPotterInformationComponent } from './harry-potter-information/harry-potter-information.component';


@NgModule({
  declarations: [
    AppComponent,
    GuesserComponent,
    NavigationComponent,
    HarryPotterInformationComponent,
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
