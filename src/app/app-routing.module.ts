import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GetAgeByNameComponent} from "./getAgeByName/getAgeByName.component";

const routes: Routes = [
  { path: '', redirectTo: '/guesser', pathMatch: 'full' },
  { path: 'guesser', component: GetAgeByNameComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
