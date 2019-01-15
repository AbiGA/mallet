import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productsinsidelucernaobtuse',
  templateUrl: './productsinsidelucernaobtuse.component.html',
  styleUrls: ['./productsinsidelucernaobtuse.component.scss']
})
export class ProductsinsidelucernaobtuseComponent implements OnInit {

  constructor(private router: Router) { }

  image1 = "../../../assets/images/productinside/lucernacollection/Obtuse/Obtuse1.png";
  image2 = "../../../assets/images/productinside/lucernacollection/Obtuse/Obtuse2.png";
  image3 = "../../../assets/images/productinside/lucernacollection/Obtuse/Obtuse3.png";

  image1_large = "../../../assets/images/productinside/lucernacollection/Obtuse/Obtuse1.png";
  image2_large = "../../../assets/images/productinside/lucernacollection/Obtuse/Obtuse2.png";
  image3_large = "../../../assets/images/productinside/lucernacollection/Obtuse/Obtuse3.png";

  mainimage = "../../../assets/images/productinside/lucernacollection/Obtuse/Obtuse1.png";

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
