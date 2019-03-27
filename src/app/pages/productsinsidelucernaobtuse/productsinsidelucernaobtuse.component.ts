import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-productsinsidelucernaobtuse',
  templateUrl: './productsinsidelucernaobtuse.component.html',
  styleUrls: ['./productsinsidelucernaobtuse.component.scss']
})
export class ProductsinsidelucernaobtuseComponent implements OnInit {

  constructor(private router: Router) {
    document.getElementById("product").style.color="white";
  }

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
