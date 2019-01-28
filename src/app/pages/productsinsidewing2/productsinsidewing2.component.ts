import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productsinsidewing2',
  templateUrl: './productsinsidewing2.component.html',
  styleUrls: ['./productsinsidewing2.component.scss']
})
export class Productsinsidewing2Component implements OnInit {

  constructor(private router: Router) {
    document.getElementById("product").style.color="white";
  }

 image1 = "../../../assets/images/productinside/wingcollection/Wing2/Wing-2.png";
 image2 = "../../../assets/images/productinside/wingcollection/Wing2/Wing-2b.png";


 image1_large = "../../../assets/images/productinside/wingcollection/Wing2/Wing-2.png";
 image2_large = "../../../assets/images/productinside/wingcollection/Wing2/Wing-2b.png";

 mainimage = "../../../assets/images/productinside/wingcollection/Wing2/Wing-2.png";

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
