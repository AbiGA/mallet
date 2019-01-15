import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productsinsidewing',
  templateUrl: './productsinsidewing.component.html',
  styleUrls: ['./productsinsidewing.component.scss']
})
export class ProductsinsidewingComponent implements OnInit {

  constructor(private router: Router) {
  }

 image1 = "../../../assets/images/productinside/wingcollection/Wing1/wing11.png";
 image2 = "../../../assets/images/productinside/wingcollection/Wing1/wing12.png";

 image1_large = "../../../assets/images/productinside/wingcollection/Wing1/wing11.png";
 image2_large = "../../../assets/images/productinside/wingcollection/Wing1/wing12.png";

 mainimage = "../../../assets/images/productinside/wingcollection/Wing1/wing11.png";

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
