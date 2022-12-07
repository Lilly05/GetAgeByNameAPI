import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-harry-potter-information',
  templateUrl: './harry-potter-information.component.html',
  styleUrls: ['./harry-potter-information.component.css']
})
export class HarryPotterInformationComponent {
  constructor(private http: HttpClient) {
  }

  id: string = '';
  houseName: string = '';
  houseColors: string = '';
  houseAnimal: string = '';
  houseGhost: string = '';
  houseTraits: string[] = [];
  showInformation: boolean = false;

  getHouseInformation(id: any){
    this.houseTraits = [];
      this.http.get('https://wizard-world-api.herokuapp.com/Houses/' + id).subscribe((response: any) => {
        this.houseName = response.name;
        this.houseColors = response.houseColours;
        this.houseAnimal = response.animal;
        this.houseGhost = response.ghost;
        for (let element = 0; element < 6; element++){
          this.houseTraits.push(response.traits[element].name);
        }
        this.showInformation = true;
      });
  }
}
