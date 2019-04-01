import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-productsinsidemensacornula',
  templateUrl: './productsinsidemensacornula.component.html',
  styleUrls: ['./productsinsidemensacornula.component.scss']
})
export class ProductsinsidemensacornulaComponent implements OnInit {

  constructor(private router: Router) {
    document.getElementById("product").style.color="white";
  }

  image1 = "../../../assets/images/comingup/Mensa/Cornula/Cornula.png";
  image2 = "../../../assets/images/comingup/Mensa/Cornula/Cornula2.png";
  image3 = "../../../assets/images/comingup/Mensa/Cornula/Cornula3.png";

  image1_large = "../../../assets/images/comingup/Mensa/Cornula/Cornula.png";
  image2_large = "../../../assets/images/comingup/Mensa/Cornula/Cornula2.png";
  image3_large = "../../../assets/images/comingup/Mensa/Cornula/Cornula3.png";

  mainimage = "../../../assets/images/comingup/Mensa/Cornula/Cornula.png";

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