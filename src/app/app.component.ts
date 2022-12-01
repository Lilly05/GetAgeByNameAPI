import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'guessAgeByName';
  constructor(private http: HttpClient) {
    this.getImageLink();
  }

  picture: any;

  getImageLink(){
    this.http.get('http://shibe.online/api/shibes').subscribe((response: any)=>{
      this.picture = response;
    });
  }
}
