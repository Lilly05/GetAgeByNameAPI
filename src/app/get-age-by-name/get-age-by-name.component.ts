import {Component, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-get-age-by-name',
  templateUrl: './get-age-by-name.component.html',
  styleUrls: ['./get-age-by-name.component.css']
})

export class GetAgeByNameComponent {

  @Input() pictureLink: string = '';

  constructor(private http: HttpClient) {

  }

  name: string = '';
  age: any;
  showCard: boolean = false;

  getAgeByName(name: string) {
    if (name != '' && name != null) {
      this.http.get('https://api.agify.io?name=' + name).subscribe((age: any) => {
        if(age.age != null) {
          this.name = name;
          this.age = age.age;
          this.showCard = true;
        }else{
          this.showCard = false;
        }
      });
    }else{
      this.showCard = false;
    }
  }
}
