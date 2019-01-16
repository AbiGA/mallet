import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productsinsidestumprobbiesofa',
  templateUrl: './productsinsidestumprobbiesofa.component.html',
  styleUrls: ['./productsinsidestumprobbiesofa.component.scss']
})
export class ProductsinsidestumprobbiesofaComponent implements OnInit {

  constructor(private router: Router) {
  }

 image1 = "../../../assets/images/productinside/stumpcollection/robbiesofa/robbie-sofa.png";
 image2 = "../../../assets/images/productinside/stumpcollection/robbiesofa/robbie-sofab.png";
 image3 = "../../../assets/images/productinside/stumpcollection/robbiesofa/robbie-sofac.png";

 image1_large = "../../../assets/images/productinside/stumpcollection/robbiesofa/robbie-sofa.png";
 image2_large = "../../../assets/images/productinside/stumpcollection/robbiesofa/robbie-sofab.png";
 image3_large = "../../../assets/images/productinside/stumpcollection/robbiesofa/robbie-sofac.png";

 mainimage = "../../../assets/images/productinside/stumpcollection/robbiesofa/robbie-sofa.png";

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
