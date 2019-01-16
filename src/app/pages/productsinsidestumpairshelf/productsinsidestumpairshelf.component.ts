import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productsinsidestumpairshelf',
  templateUrl: './productsinsidestumpairshelf.component.html',
  styleUrls: ['./productsinsidestumpairshelf.component.scss']
})
export class ProductsinsidestumpairshelfComponent implements OnInit {

  constructor(private router: Router) {
  }

 image1 = "../../../assets/images/productinside/stumpcollection/airshelf/air-shelf.png";
 image2 = "../../../assets/images/productinside/stumpcollection/airshelf/air-shelfb.png";

 image1_large = "../../../assets/images/productinside/stumpcollection/airshelf/air-shelf.png";
 image2_large = "../../../assets/images/productinside/stumpcollection/airshelf/air-shelfb.png";

 mainimage = "../../../assets/images/productinside/stumpcollection/airshelf/air-shelf.png";

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
