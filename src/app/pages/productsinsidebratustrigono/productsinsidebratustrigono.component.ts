import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productsinsidebratustrigono',
  templateUrl: './productsinsidebratustrigono.component.html',
  styleUrls: ['./productsinsidebratustrigono.component.scss']
})
export class ProductsinsidebratustrigonoComponent implements OnInit {

  constructor(private router: Router) {
    document.getElementById("product").style.color="white";
  }

  image1 = "../../../assets/images/productinside/bratuscollection/Trigono/trigono1.png";
 image2 = "../../../assets/images/productinside/bratuscollection/Trigono/trigono2.png";

 image1_large = "../../../assets/images/productinside/bratuscollection/Trigono/trigono1.png";
 image2_large = "../../../assets/images/productinside/bratuscollection/Trigono/trigono2.png";

 mainimage = "../../../assets/images/productinside/bratuscollection/Trigono/trigono1.png";

 changeMainImage(image: any){
   this.mainimage = image;
 }
  scroll(el) {
   el.scrollIntoView();
 }

 ngOnInit() {
   this.router.events.subscribe(() =>
     window.scrollTo({
       top: 0,
       left: 0,
       behavior: 'smooth'
     })
   );
 }

 ngAfterViewInit() {
  window.scrollTo(0, 0);
}
}
