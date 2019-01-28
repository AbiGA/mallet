import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productsinsidelucernarelica',
  templateUrl: './productsinsidelucernarelica.component.html',
  styleUrls: ['./productsinsidelucernarelica.component.scss']
})
export class ProductsinsidelucernarelicaComponent implements OnInit {

  constructor(private router: Router) {
    document.getElementById("product").style.color="white";
  }

  image1 = "../../../assets/images/productinside/lucernacollection/Relica/Relica1.png";
  image2 = "../../../assets/images/productinside/lucernacollection/Relica/Relica2.png";
  image3 = "../../../assets/images/productinside/lucernacollection/Relica/Relica3.png";

  image1_large = "../../../assets/images/productinside/lucernacollection/Relica/Relica1.png";
  image2_large = "../../../assets/images/productinside/lucernacollection/Relica/Relica2.png";
  image3_large = "../../../assets/images/productinside/lucernacollection/Relica/Relica3.png";

  mainimage = "../../../assets/images/productinside/lucernacollection/Relica/Relica1.png";

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
