import { FruitService } from 'src/app/services/fruit/fruit.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.page.html',
  styleUrls: ['./favoris.page.scss'],
})
export class FavorisPage implements OnInit {

  resultsOfFilter = new Map<any,any>();

  constructor(private fruitService:FruitService , private router:Router) { 
    this.resultsOfFilter = this.fruitService.showFavoriteFruits();
    console.log(this.resultsOfFilter)
  }

  ngOnInit() {
  }
  toPage(obj) {
    localStorage.setItem("fruit", JSON.stringify(obj));
    localStorage.setItem("colorfruit", JSON.stringify(obj.color));
    localStorage.setItem("imgfruit", JSON.stringify(obj.img));
    this.router.navigate(['detail'])
  }
  // handleChange(event) {
  //   const query = event.target.value.toLowerCase();
  //   this.resultsOfFilter = this.listFruits.filter(d => (d.family.toLowerCase().indexOf(query) > -1) || (d.name.toLowerCase().indexOf(query) > -1));
  // }
}

