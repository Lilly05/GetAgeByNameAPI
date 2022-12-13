import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-covid19info',
  templateUrl: './covid19info.component.html',
  styleUrls: ['./covid19info.component.css']
})
export class Covid19infoComponent {

  countryname: string = '';
  cantons: string[] = [];
  infections: string[] = [];
  abbrevation: string = '';
  lastUpdated: string = '';
  constructor(private http: HttpClient) {
    this.getSwitzerlandInfo();
  }

  getSwitzerlandInfo(){
    this.http.get('https://api.apify.com/v2/key-value-stores/lDegAca820XgvjE0C/records/LATEST?disableRedirect=true').subscribe((response: any) => {
      console.log(response);
      this.countryname = response.country;
      this.lastUpdated = response.lastUpdatedAtSource;
      for (let element = 0; element < 27; element++){
        this.cantons.push(response.infectedByRegion[element].region);
        this.infections.push(response.infectedByRegion[element].infected);
      }
      this.getCantonName(this.cantons);
    });
  }

  getCantonName(cantons: string[]){
    this.http.get('https://geobasisdaten.ch/api/v1/corp/?format=json').subscribe((response: any) => {
      console.log(response);
      for(let element = 1; element < 27; element++){
        this.abbrevation = response[element].abbr;
        for (let canton = 0; canton < cantons.length; canton++){
          if (this.abbrevation === cantons[canton]){
           cantons[canton] = response[element].name;
          }
        }
      }
      return cantons;
    });
  }
}
