import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'guessAgeByName';

  constructor() {
  }

  titleOfPage: string = '';

  setTitleOfPage(title: string){
    this.titleOfPage = title;
    console.log(title);
  }

}
