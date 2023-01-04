import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GuesserComponent} from "./guesser/guesser.component";
import {HolidaycheckComponent} from "./holidaycheck/holidaycheck.component";
import {Covid19infoComponent} from "./covid19info/covid19info.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'guesser', component: GuesserComponent},
  { path: 'holiday-check', component: HolidaycheckComponent},
  { path: 'covid19-info', component: Covid19infoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
