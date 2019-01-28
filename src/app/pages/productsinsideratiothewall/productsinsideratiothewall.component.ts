import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Location, PopStateEvent } from "@angular/common";

@Component({
  selector: 'app-productsinsideratiothewall',
  templateUrl: './productsinsideratiothewall.component.html',
  styleUrls: ['./productsinsideratiothewall.component.scss']
})
export class ProductsinsideratiothewallComponent implements OnInit {

  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];

  constructor(private router: Router, private location: Location) {
    document.getElementById("product").style.color="white";
   }

  
   image1 = "../../../assets/images/productinside/Ratiocollection/wall/The-Wall.png";
   image2 = "../../../assets/images/productinside/Ratiocollection/wall/The-Wallb.png";

 
   image1_large = "../../../assets/images/productinside/Ratiocollection/wall/The-Wall.png";
   image2_large = "../../../assets/images/productinside/Ratiocollection/wall/The-Wallb.png";
 
   mainimage = "../../../assets/images/productinside/Ratiocollection/wall/The-Wall.png";

  changeMainImage(image: any){
    this.mainimage = image;
  }
   scroll(el) {
    el.scrollIntoView();
  }

  ngOnInit() {
    this.location.subscribe((ev:PopStateEvent) => {
        this.lastPoppedUrl = ev.url;
    });
    this.router.events.subscribe((ev:any) => {
        if (ev instanceof NavigationStart) {
            if (ev.url != this.lastPoppedUrl)
                this.yScrollStack.push(window.scrollY);
        } else if (ev instanceof NavigationEnd) {
            if (ev.url == this.lastPoppedUrl) {
                this.lastPoppedUrl = undefined;
                window.scrollTo(0, this.yScrollStack.pop());
            } else
                window.scrollTo(0, 0);
        }
    });
}
ngAfterViewInit() {
  window.scrollTo(0, 0);
}
}
