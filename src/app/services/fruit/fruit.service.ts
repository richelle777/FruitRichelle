import { GetFruitsService } from './../getFruits/get-fruits.service';
import { Injectable} from '@angular/core';
import { DatabaseService } from '../database/database.service';



@Injectable({
  providedIn: 'root'
})

export class FruitService{
  Tfruit : any;
  listFruits : any;
  favoriteFruits  = new Map<any,any>();
  constructor(private getFruitsService:GetFruitsService , private dbService:DatabaseService) {
    
    
  }
  addToFavorite(obj){
    this.favoriteFruits.set(obj.id, obj);
  }
  removeToFavorite(obj){
    this.favoriteFruits.delete(obj.id);
  }
  showFavoriteFruits(){
    return this.favoriteFruits;
  }
  
   showFruits(){
    this.getFruitsService.getListeFruits().then((reponse) => {
      this.Tfruit = reponse;
      this.listFruits = this.Tfruit;
    });
    console.log(this.listFruits);
  }
}