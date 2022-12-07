import {Component, EventEmitter, Input, Output} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-guesser',
  templateUrl: './guesser.component.html',
  styleUrls: ['./guesser.component.css']
})

export class GuesserComponent {
  constructor(private http: HttpClient) {
  }

  input: string = '';
  name: string = '';
  nationality: string[] = [];
  age: any;
  showCard: boolean = false;
  nameNotFound: boolean = false;

  getAgeByName(name: string) {
    if (name != '' && name != null) {
      this.http.get('https://api.agify.io?name=' + name).subscribe((age: any) => {
        if (age.age != null) {
          this.name = name;
          this.age = age.age;
          this.showCard = true;
          this.nameNotFound = false;
        } else {
          this.showCard = false;
          this.nameNotFound = true;
        }
      });
    } else {
      this.showCard = false;
    }
  }

  getNationalityByName(name: string){
    this.nationality = [];
    this.http.get('https://api.nationalize.io/?name=' + name).subscribe((nationality: any) => {
      for (let element = 0; element < 5; element++){
        this.http.get('https://restcountries.com/v2/alpha/' + nationality.country[element].country_id).subscribe((countryName: any) => {
          this.nationality.push(countryName.name);
        });
      }
    });
  }
  headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*');

  getDomains(){
    this.http.get('https://api.domainsdb.info/v1/domains/search?domain=guineapig',{ 'headers': this.headers }).subscribe((domains: any) => {
      console.log(domains[0]);
    });
  }
}
