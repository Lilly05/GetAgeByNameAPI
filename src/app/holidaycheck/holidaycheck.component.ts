import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-holidaycheck',
  templateUrl: './holidaycheck.component.html',
  styleUrls: ['./holidaycheck.component.css']
})
export class HolidaycheckComponent {
  selectedDate: string = new Date().toISOString().slice(0, 10);
  date: string[] = [];
  isHoliday: boolean = false;
  weekday: string = '';
  holidayName: string = '';
  holidayDate: string = '';
  activity: string = '';
  constructor(private http: HttpClient) {
  }
  selectDate(event: any){
    this.selectedDate = event.target.value;
    this.date = this.getDate(event.target.value);
  }
  getDate(date: string){
    this.date = date.split("-");
    return this.date;
  }
  checkDate(){
    this.http.get('https://holidays.abstractapi.com/v1/?api_key=3121e0286d494be3876f9640cbd3c670&country=CH&day=' + this.date[2] + '&month=' + this.date[1] + '&year=' + this.date[0]).subscribe((response: any) => {
      if (response.length == 0){
        this.isHoliday = false;
      }else{
        this.holidayDate = response[0].date;
        this.holidayName = response[0].name;
        this.weekday = response[0].week_day;
        this.isHoliday = true;
        this.getActivity();
      }
    });
  }
  getActivity(){
   this.http.get('https://www.boredapi.com/api/activity').subscribe((response: any) => {
      this.activity = response.activity.toLowerCase();
   });
  }
}
