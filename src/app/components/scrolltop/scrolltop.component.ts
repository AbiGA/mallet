import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-scrolltop',
  templateUrl: './scrolltop.component.html',
  styleUrls: ['./scrolltop.component.scss']
})
export class ScrolltopComponent implements OnInit {

  constructor() { }

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
}

  });
});
  }

}
