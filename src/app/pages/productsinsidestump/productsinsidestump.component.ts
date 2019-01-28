import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productsinsidestump',
  templateUrl: './productsinsidestump.component.html',
  styleUrls: ['./productsinsidestump.component.scss']
})
export class ProductsinsidestumpComponent implements OnInit {

  constructor(private router: Router) {
     document.getElementById("product").style.color="white";
  }

 image1 = "../../../assets/images/productinside/stumpcollection/Stump table/stump-table1.png";
 image2 = "../../../assets/images/productinside/stumpcollection/Stump table/stump-table2.png";
 image3 = "../../../assets/images/productinside/stumpcollection/Stump table/stump-table3.png";
 image4 = "../../../assets/images/productinside/stumpcollection/Stump table/stump-table4.png"
 image1_large = "../../../assets/images/productinside/stumpcollection/Stump table/stump-table1.png";
 image2_large = "../../../assets/images/productinside/stumpcollection/Stump table/stump-table2.png";
 image3_large = "../../../assets/images/productinside/stumpcollection/Stump table/stump-table3.png";
 image4_large = "../../../assets/images/productinside/stumpcollection/Stump table/stump-table4.png";

 mainimage = "../../../assets/images/productinside/stumpcollection/Stump table/stump-table1.png";

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
