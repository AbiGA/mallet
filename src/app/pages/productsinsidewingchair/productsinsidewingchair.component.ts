import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productsinsidewingchair',
  templateUrl: './productsinsidewingchair.component.html',
  styleUrls: ['./productsinsidewingchair.component.scss']
})
export class ProductsinsidewingchairComponent implements OnInit {

  constructor(private router: Router) {
  }

 image1 = "../../../assets/images/productinside/wingcollection/wingchair/Wing-Chair.png";
 image2 = "../../../assets/images/productinside/wingcollection/wingchair/Wing-Chairb.png";
 image3 = "../../../assets/images/productinside/wingcollection/wingchair/Wing-Chairc.png";
 image4 = "../../../assets/images/productinside/wingcollection/wingchair/Wing-Chaird.png";

 image1_large = "../../../assets/images/productinside/wingcollection/wingchair/Wing-Chair.png";
 image2_large = "../../../assets/images/productinside/wingcollection/wingchair/Wing-Chairb.png";
 image3_large = "../../../assets/images/productinside/wingcollection/wingchair/Wing-Chairc.png";
 image4_large = "../../../assets/images/productinside/wingcollection/wingchair/Wing-Chaird.png";

 mainimage = "../../../assets/images/productinside/wingcollection/wingchair/Wing-Chair.png";

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
