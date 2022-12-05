import { interval } from 'rxjs';
import { GetFruitsService } from './../getFruits/get-fruits.service';
import { Injectable, OnInit} from '@angular/core';



@Injectable({
  providedIn: 'root'
})

export class FruitService{
  Tfruit : any;
  listFruits : any;
  favoriteFruits  = new Map<any,any>();
  constructor(private getFruitsService:GetFruitsService) {
  
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
      // this.categories.add(this.fruits.family);
      // this.listFruits.forEach(fruit => {
      //   this.categories.add(fruit.family)
      // });
      // console.log(this.categories);
      
      
      // return this.listFruits;
      
    });
    console.log(this.listFruits);
    // console.log(this.fruits);
    
    // this.categories = this.fruitservice.getCategories();
  }
  //  getListeFruits(){
  //     return this.Tfruit;
  // }
  // getCategories(){
  //   console.log(this.Tfruit);
  //   return this.Tcategories
    
  //   // this.Tfruit.forEach(fruit => {
  //   //   this.Tcategories.add(fruit.family)
  //   //   console.log(fruit);
      
  //   // });
  //   // return this.Tcategories
  //   //this.Tcategories = this.fruitService.Tfruit;
  //   // console.log(this.fruitService.getFruits);
  //   // console.log(this.Tcategories);
    
    
  // }
  //  getListeFruits(url:string):Observable<any>{
  //   return this._http.get(url,httpOptions);
  // }
//   test(){
//     console.log(this.listFruits);

// }
  // getFruits() {
  //   this.getListeFruits('https://www.fruityvice.com/api/fruit/all ')
  //     .subscribe(
  //       items => {
  //         this.Tfruit=items[0];
  //         this.test = this.Tfruit
  //         //console.log(items.family)
  //         // this.Tcategories.add(items[2].family);
  //         // this.i = this.i+1;
  //         // console.log(this.Tfruit);
  //       }
       
  //     ).closed
  //     // for(let i =0; i < this.Tfruit.length; i++){
  //     //   console.log("salut");
        
  //     //   console.log(this.Tfruit[i].family);
        
  //     //   this.Tcategories.add(this.Tfruit[i].family);
  //     // }
  // }
  
  // test() {
  //   this.getListeFruits('https://www.fruityvice.com/api/fruit/all ')
  //   .subscribe(
  //     items => {
  //       this.Tfruit=items;
       
        
  //       this.listFruits = this.Tfruit;
  //       console.log(this.listFruits);
  //       //console.log(items.family)
  //       // this.Tcategories.add(items[2].family);
  //       // this.i = this.i+1;
  //       // console.log(this.Tfruit);
  //     }
    
     
  //   )
   
  // }
    // this.
    // for(let i =0; i < this.Tfruit.length; i++){
    //   console.log(this.Tfruit[i].family);
      
    //   this.Tcategories.add(this.Tfruit[i].family);
    // }
      // this.Tfruit.forEach(fruit => {
      //   // console.log("test");
        
      //   // console.log(fruit);
      //   this.Tcategories.add(fruit.family);
      // });
      // console.log(this.Tcategories);
  
  // ngOnInit() {
  //   this.getListeFruits("https://www.fruityvice.com/api/fruit/all");
  // }

}