import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Location, PopStateEvent } from "@angular/common";

@Component({
  selector: 'app-productsinsideratioionic',
  templateUrl: './productsinsideratioionic.component.html',
  styleUrls: ['./productsinsideratioionic.component.scss']
})
export class ProductsinsideratioionicComponent implements OnInit {

  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];

  constructor(private router: Router, private location: Location) {
    document.getElementById("product").style.color="white";
   }

   image1 = "../../../assets/images/productinside/Ratiocollection/ionic/Ionic.png";
   image2 = "../../../assets/images/productinside/Ratiocollection/ionic/Ionicb.png";
   image3 = "../../../assets/images/productinside/Ratiocollection/ionic/Ionicc.png";

   image1_large = "../../../assets/images/productinside/Ratiocollection/ionic/Ionic.png";
   image2_large = "../../../assets/images/productinside/Ratiocollection/ionic/Ionicb.png";
   image3_large = "../../../assets/images/productinside/Ratiocollection/ionic/Ionicc.png";

  mainimage = "../../../assets/images/productinside/Ratiocollection/ionic/Ionic.png";

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