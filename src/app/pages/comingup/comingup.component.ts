import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comingup',
  templateUrl: './comingup.component.html',
  styleUrls: ['./comingup.component.scss']
})
export class ComingupComponent implements OnInit {

  constructor() {
    document.getElementById("product").style.color="#8f7d4f";
  }

  ngOnInit() {
  }

}
