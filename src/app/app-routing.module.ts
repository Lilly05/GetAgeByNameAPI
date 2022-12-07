import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GuesserComponent} from "./guesser/guesser.component";
import {HarryPotterInformationComponent} from "./harry-potter-information/harry-potter-information.component";

const routes: Routes = [
  { path: '', redirectTo: '/guesser', pathMatch: 'full' },
  { path: 'guesser', component: GuesserComponent},
  { path: 'harry-potter', component: HarryPotterInformationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
