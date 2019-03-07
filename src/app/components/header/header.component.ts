import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( private router: Router) { }

  navbarOpen = false;

  toggleNavbar() {
    document.getElementById("scrolldiv").style.backgroundColor="#141414";
//    this.router.navigate( ['products' ], {fragment: 'stump'});
    this.navbarOpen = !this.navbarOpen;
  }

  ngOnInit() {
  }
  // scroll(el) {
  //   el.scrollIntoView();
  // } 
}
