import { FruitService } from 'src/app/services/fruit/fruit.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  fruitSelected : any;
  colorfruit : any;
  imgfruit : any;
  isLikeIcon = 'heart-outline';

  constructor(private fruitService:FruitService) {
    
  }

  ngOnInit() {
    const retrieve = localStorage.getItem("fruit");
    this.fruitSelected = JSON.parse(retrieve);  
    console.log(this.fruitSelected);
     
    this.colorfruit = JSON.parse(localStorage.getItem("colorfruit"))
    this.imgfruit = JSON.parse(localStorage.getItem("imgfruit")) 
    console.log(this.fruitSelected.nutritions.sugar);
  }

  ionViewDidEnter(){
  }

  liked(){
    Object.defineProperty(this.fruitSelected, 'color', {
      value: this.colorfruit,
      writable: true
    });
    Object.defineProperty(this.fruitSelected, 'img', {
      value: this.imgfruit,
      writable: true
    });
    if(this.isLikeIcon == 'heart-outline'){
      this.isLikeIcon = 'heart-sharp'
      console.log(this.fruitSelected);
      
      this.fruitService.addToFavorite(this.fruitSelected);
    }  
    else{
      this.isLikeIcon = 'heart-outline'
      this.fruitService.removeToFavorite(this.fruitSelected);
    }
  }
}
