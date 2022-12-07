import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GuesserComponent} from "./guesser/guesser.component";
import {DomainSearchComponent} from "./domain-search/domain-search.component";

const routes: Routes = [
  { path: '', redirectTo: '/guesser', pathMatch: 'full' },
  { path: 'guesser', component: GuesserComponent},
  { path: 'domain-searcher', component: DomainSearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
