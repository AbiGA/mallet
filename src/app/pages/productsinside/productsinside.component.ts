import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-productsinside',
  templateUrl: './productsinside.component.html',
  styleUrls: ['./productsinside.component.scss']
})
export class ProductsinsideComponent implements OnInit {

  constructor(private router: Router) {
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
  
}
