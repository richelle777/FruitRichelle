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
    this.colorfruit = JSON.parse(localStorage.getItem("colorfruit"))
    this.imgfruit = JSON.parse(localStorage.getItem("imgfruit")) 
    console.log(this.fruitSelected.nutritions.sugar);
    
  }
  ionViewDidEnter(){
   
  }
  liked(){
    if(this.isLikeIcon == 'heart-outline'){
      this.isLikeIcon = 'heart-sharp'
      this.fruitService.addToFavorite(this.fruitSelected);
    }  
    else{
      this.isLikeIcon = 'heart-outline'
      this.fruitService.removeToFavorite(this.fruitSelected);
    }
  }
}
