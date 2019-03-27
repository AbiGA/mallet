import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Location, PopStateEvent } from "@angular/common";
import * as $ from 'jquery';

@Component({
  selector: 'app-productsinsideratioergos',
  templateUrl: './productsinsideratioergos.component.html',
  styleUrls: ['./productsinsideratioergos.component.scss']
})
export class ProductsinsideratioergosComponent implements OnInit {
  
  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];

  constructor(private router: Router, private location: Location) {
    document.getElementById("product").style.color="white";
   }

   image1 = "../../../assets/images/productinside/Ratiocollection/ergos/Ergos.png";
   image2 = "../../../assets/images/productinside/Ratiocollection/ergos/Ergosb.png";
   image3 = "../../../assets/images/productinside/Ratiocollection/ergos/Ergosc.png";
 
   image1_large = "../../../assets/images/productinside/Ratiocollection/ergos/Ergos.png";
   image2_large = "../../../assets/images/productinside/Ratiocollection/ergos/Ergosb.png";
   image3_large = "../../../assets/images/productinside/Ratiocollection/ergos/Ergosc.png";
 
   mainimage = "../../../assets/images/productinside/Ratiocollection/ergos/Ergos.png";

  changeMainImage(image: any){
    this.mainimage = image;
  }
   scroll(el) {
    el.scrollIntoView();
  }

  ngOnInit() {
    $(document).ready(function(){
      $(function() {
        window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrolldiv").style.display = "block";
  } else {
    document.getElementById("scrolldiv").style.display = "none";
  }
  if (document.body.scrollTop > 380 || document.documentElement.scrollTop > 380) {
    $("#product_container").removeClass().addClass("onscroll");
   // document.getElementById("scrolldiv").style.backgroundColor="white";
    $("h2").removeClass().addClass("othewise_element");
   document.getElementById("product_container").classList.remove("otherwise");
  } else {
    $("#product_container").removeClass("onscroll").addClass("otherwise");
    $("h2").removeClass("othewise_element").addClass("onscroll_element");
    //document.getElementById("scrolldiv").style.backgroundColor="#141414";
  //  document.getElementById("product_container").classList.add("otherwise");
  }
  }
  });
  });
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