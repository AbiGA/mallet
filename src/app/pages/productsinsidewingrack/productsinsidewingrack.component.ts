import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productsinsidewingrack',
  templateUrl: './productsinsidewingrack.component.html',
  styleUrls: ['./productsinsidewingrack.component.scss']
})
export class ProductsinsidewingrackComponent implements OnInit {

  constructor(private router: Router) {
  }

 image1 = "../../../assets/images/productinside/wingcollection/RickRack/Rick-Rack.png";
 image2 = "../../../assets/images/productinside/wingcollection/RickRack/Rick-Rackb.png";
 image3 = "../../../assets/images/productinside/wingcollection/RickRack/Rick-Rackc.png";
 image4 = "../../../assets/images/productinside/wingcollection/RickRack/Rick-Rackd.png";
 image5 = "../../../assets/images/productinside/wingcollection/RickRack/Rick-Racke.png";

 image1_large = "../../../assets/images/productinside/wingcollection/RickRack/Rick-Rack.png";
 image2_large = "../../../assets/images/productinside/wingcollection/RickRack/Rick-Rackb.png";
 image3_large = "../../../assets/images/productinside/wingcollection/RickRack/Rick-Rackc.png";
 image4_large = "../../../assets/images/productinside/wingcollection/RickRack/Rick-Rackd.png";
 image5_large = "../../../assets/images/productinside/wingcollection/RickRack/Rick-Racke.png";

 mainimage = "../../../assets/images/productinside/wingcollection/RickRack/Rick-Rack.png";

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
