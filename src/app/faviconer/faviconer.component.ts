import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-faviconer',
  templateUrl: './faviconer.component.html',
  styleUrls: ['./faviconer.component.css']
})
export class FaviconerComponent {
  constructor() {
  }
  domain: string = "";
  favicon: string = "";
  showFavicon: boolean = false;

  getFavicon(domain: string){
    this.favicon = "https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://" + domain + "&size=256";
    if (this.favicon === ""){
      this.showFavicon = false;
    }else{
      this.showFavicon = true;
    }
  }

}
