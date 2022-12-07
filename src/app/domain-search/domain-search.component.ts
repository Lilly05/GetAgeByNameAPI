import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-domain-search',
  templateUrl: './domain-search.component.html',
  styleUrls: ['./domain-search.component.css']
})
export class DomainSearchComponent {

  constructor(private http: HttpClient) {
  }

  headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*');


  getDomains(){
    this.http.get('https://api.domainsdb.info/v1/domains/search?domain=guineapig',{ 'headers': this.headers }).subscribe((domains: any) => {
      console.log(domains[0]);
    });
  }

}
