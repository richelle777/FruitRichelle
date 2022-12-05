import { FruitService } from './../fruit/fruit.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  Tcategories = new Set();
  constructor(private fruitService: FruitService) { }

  getCategories() {
    this.fruitService.listFruits.forEach(fruit => {
        this.Tcategories.add(fruit.family)
        return this.Tcategories
    })
  }
}
