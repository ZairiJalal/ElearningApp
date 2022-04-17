import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  carousel1:string = "assets/images/carousel1.jpg";
  carousel2:string = "assets/images/carousel2.jpg";
  carousel3:string = "assets/images/carousel3.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
