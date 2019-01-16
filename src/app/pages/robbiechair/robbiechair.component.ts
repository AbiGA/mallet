import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-robbiechair',
  templateUrl: './robbiechair.component.html',
  styleUrls: ['./robbiechair.component.scss']
})
export class RobbiechairComponent implements OnInit {

  constructor(private router: Router) { }

 image1 = "../../../assets/images/productinside/robbiechair/robbie-chair.png";
 image2 = "../../../assets/images/productinside/robbiechair/robbie-chair-2.png";
 image3 = "../../../assets/images/productinside/robbiechair/robbie-chair-3.png";

 image1_large = "../../../assets/images/productinside/robbiechair/robbie-chair.png";
 image2_large = "../../../assets/images/productinside/robbiechair/robbie-chair-2.png";
 image3_large = "../../../assets/images/productinside/robbiechair/robbie-chair-3.png";

 mainimage = "../../../assets/images/productinside/robbiechair/robbie-chair.png";

 changeMainImage(image: any){
   this.mainimage = image;
 }

  ngOnInit() {
  }
  ngAfterViewInit() {
    window.scrollTo(0, 0);
  }

}
