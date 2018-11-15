import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productsinside',
  templateUrl: './productsinside.component.html',
  styleUrls: ['./productsinside.component.scss']
})
export class ProductsinsideComponent implements OnInit {

  constructor(private router: Router) {
   }

  image1 = "../../../assets/images/productinside/pie 6.png";
  image2 = "../../../assets/images/productinside/pie 2.png";
  image3 = "../../../assets/images/productinside/pie 7.png";

  image1_large = "../../../assets/images/productinside/pie 6_zoom.png";
  image2_large = "../../../assets/images/productinside/pie 2_zoom.png";
  image3_large = "../../../assets/images/productinside/pie 7_zoom.png";

  mainimage = "../../../assets/images/productinside/pie 1.png";

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
  
}
