import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-robbiechair',
  templateUrl: './robbiechair.component.html',
  styleUrls: ['./robbiechair.component.scss']
})
export class RobbiechairComponent implements OnInit {

  constructor(private router: Router) {
    document.getElementById("product").style.color="white";
  }

 image1 = "../../../assets/images/productinside/robbiechair/robiechair.png";
 image2 = "../../../assets/images/productinside/robbiechair/robbie-chair-2.png";
 image3 = "../../../assets/images/productinside/robbiechair/robbie-chair-3.png";

 image1_large = "../../../assets/images/productinside/robiechair/robbiechair.png";
 image2_large = "../../../assets/images/productinside/robbiechair/robbie-chair-2.png";
 image3_large = "../../../assets/images/productinside/robbiechair/robbie-chair-3.png";

 mainimage = "../../../assets/images/productinside/robiechair/robbiechair.png";

 changeMainImage(image: any){
   this.mainimage = image;
 }

  ngOnInit() {
    $(document).ready(function(){
      $(function() {
        window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrolldiv").style.display = "block";
  } else {
    document.getElementById("scrolldiv").style.display = "none";
  }
  if (document.body.scrollTop > 380 || document.documentElement.scrollTop > 380) {
    $("#product_container").removeClass().addClass("onscroll");
   // document.getElementById("scrolldiv").style.backgroundColor="white";
    $("h2").removeClass().addClass("othewise_element");
   document.getElementById("product_container").classList.remove("otherwise");
  } else {
    $("#product_container").removeClass("onscroll").addClass("otherwise");
    $("h2").removeClass("othewise_element").addClass("onscroll_element");
    //document.getElementById("scrolldiv").style.backgroundColor="#141414";
  //  document.getElementById("product_container").classList.add("otherwise");
  }
  }
  });
  });
  }
  ngAfterViewInit() {
    window.scrollTo(0, 0);
  }

}
