import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import {GuesserComponent} from "./guesser/guesser.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NavigationComponent } from './navigation/navigation.component';
import { HolidaycheckComponent } from './holidaycheck/holidaycheck.component';
import { Covid19infoComponent } from './covid19info/covid19info.component';
import { HomeComponent } from './home/home.component';
import { FaviconerComponent } from './faviconer/faviconer.component';


@NgModule({
  declarations: [
    AppComponent,
    GuesserComponent,
    NavigationComponent,
    HolidaycheckComponent,
    Covid19infoComponent,
    HomeComponent,
    FaviconerComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
