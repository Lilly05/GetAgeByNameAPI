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
  }

  getColorPalette(){
    this.http.get('https://www.colourlovers.com/api/palettes/random').subscribe((response: any)=>{
      console.log(response);
    });
  }
}
