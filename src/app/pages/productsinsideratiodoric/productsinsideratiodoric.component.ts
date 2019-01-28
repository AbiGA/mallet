import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Location, PopStateEvent } from "@angular/common";

@Component({
  selector: 'app-productsinsideratiodoric',
  templateUrl: './productsinsideratiodoric.component.html',
  styleUrls: ['./productsinsideratiodoric.component.scss']
})
export class ProductsinsideratiodoricComponent implements OnInit {

  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];

  constructor(private router: Router, private location: Location) {
    document.getElementById("product").style.color="white";
   }

   image1 = "../../../assets/images/productinside/Ratiocollection/doric/Doric.png";
   image2 = "../../../assets/images/productinside/Ratiocollection/doric/Doricb.png";
   image3 = "../../../assets/images/productinside/Ratiocollection/doric/Doricc.png";

   image1_large = "../../../assets/images/productinside/Ratiocollection/doric/Doric.png";
   image2_large = "../../../assets/images/productinside/Ratiocollection/doric/Doricb.png";
   image3_large = "../../../assets/images/productinside/Ratiocollection/doric/Doricc.png";

  mainimage = "../../../assets/images/productinside/Ratiocollection/doric/Doric.png";

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