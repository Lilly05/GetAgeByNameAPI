import {Component, EventEmitter, Input, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-getAgeByName',
  templateUrl: './getAgeByName.component.html',
  styleUrls: ['./getAgeByName.component.css']
})

export class GetAgeByNameComponent {
  constructor(private http: HttpClient) {
  }

  input: string = '';
  name: string = '';
  nationality: string[] = [];
  age: any;
  showCard: boolean = false;

  getAgeByName(name: string) {
    if (name != '' && name != null) {
      this.http.get('https://api.agify.io?name=' + name).subscribe((age: any) => {
        if (age.age != null) {
          this.name = name;
          this.age = age.age;
          this.showCard = true;
        } else {
          this.showCard = false;
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
        this.nationality.push(nationality.country[element].country_id);
      }
    });
  }
}
