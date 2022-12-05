import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apropos',
  templateUrl: './apropos.page.html',
  styleUrls: ['./apropos.page.scss'],
})
export class AproposPage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    spaceBetween: 10,
  };
  constructor() { }

  ngOnInit() {
  }

}
