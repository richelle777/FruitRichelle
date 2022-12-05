import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { Network } from '@capacitor/network';
import { GetFruitsService } from 'src/app/services/getFruits/get-fruits.service';
import { Router } from '@angular/router';

Network.addListener('networkStatusChange', status => {
  console.log('Network status changed', status);
});

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  Scategories = new Set();
  selectCat : any;
  listFruits : any;
  listCategories:any;
  fruitsOfCat : any;
  imgColorFruits = [{"img":"assets/img/orange-fruit.png" , "color":"frorange"} , {"img":"assets/img/realistic-orange.png" , "color":"frorangeextralight"} , {"img":"assets/img/mangue-entiere.png" , "color":"frorange"} , {"img":"assets/img/liquide-fruit-ananas.png" , "color":"fryellowlight"} , {"img":"assets/img/fresh-red-plum.png" , "color":"frorange"} , {"img":"assets/img/ripe-bananas.png" , "color":"fryellowlight"} , {"img":"assets/img/ripe-whole.png" , "color":"frgreenlight"} , {"img":"assets/img/realistic-grapes.png" , "color":"fryellowlight"} , {"img":"assets/img/fruits-melon.png" , "color":"frgreenlight"} , {"img":"assets/img/abricots.png" , "color":"frgreenlight"} , {"img":"assets/img/cerise-branche.png" , "color":"frorange"} , {"img":"assets/img/composition.png" , "color":"frorange"} , {"img":"assets/img/croquis.png" , "color":"frpurplelight"} , {"img":"assets/img/fruit-goyave.png" , "color":"frorange"} , {"img":"assets/img/ripe-bananas.png" , "color":"fryellowlight"} , {"img":"assets/img/kiwi.png" , "color":"frorangeextralight"} , {"img":"assets/img/ripe-bananas.png" , "color":"fryellowlight"} , {"img":"assets/img/ripe-whole.png" , "color":"frgreenlight"} , {"img":"assets/img/realistic-grapes.png" , "color":"fryellowlight"} , {"img":"assets/img/mangue-entiere.png" , "color":"frorange"} , {"img":"assets/img/realistic-mango.png" , "color":"frorangeextralight"} , {"img":"assets/img/realistic-mango.png" , "color":"frorangeextralight"} , {"img":"assets/img/orange-fruit.png" , "color":"frorange"} , {"img":"assets/img/orange-fruit.png" , "color":"frorange"} , {"img":"assets/img/orange-fruit.png" , "color":"frorange"} , {"img":"assets/img/orange-fruit.png" , "color":"frorange"} , {"img":"assets/img/orange-fruit.png" , "color":"frorange"} , {"img":"assets/img/composition.png" , "color":"frorange"} , {"img":"assets/img/liquide-fruit-ananas.png" , "color":"fryellowlight"} , {"img":"assets/img/orange-fruit.png" , "color":"frorange"} , {"img":"assets/img/liquide-fruit-ananas.png" , "color":"fryellowlight"} , {"img":"assets/img/liquide-fruit-ananas.png" , "color":"fryellowlight"} , {"img":"assets/img/ripe-whole.png" , "color":"frgreenlight"} , {"img":"assets/img/realistic-grapes.png" , "color":"fryellowlight"} , {"img":"assets/img/fruits-melon.png" , "color":"frgreenlight"} ,{"img":"assets/img/realistic-grapes.png" , "color":"fryellowlight"} , {"img":"assets/img/liquide-fruit-ananas.png" , "color":"fryellowlight"} , {"img":"assets/img/fresh-red-plum.png" , "color":"frorange"} , {"img":"assets/img/ripe-bananas.png" , "color":"fryellowlight"}]
  
  constructor(private router: Router , private getFruitService : GetFruitsService) { 
    this.getFruitService.getListeFruits().then((reponse) => {
      this.listFruits = reponse
      this.listFruits.forEach(fruit => {
        this.Scategories.add(fruit.family)
      });
      this.listCategories = Array.from(this.Scategories)
      this.selectCat = this.listCategories[0];
      this.fruitsOfCat = this.listFruits.filter(fruit => fruit.family == this.selectCat);
      for (let i = 0; i < this.listFruits.length; i++) {
        Object.defineProperty(this.listFruits[i], 'img', {
          value: this.imgColorFruits[i].img,
          writable: true
        });
        Object.defineProperty(this.listFruits[i], 'color', {
          value: this.imgColorFruits[i].color,
          writable: true
        });
      }
    });
  }
  isHide = false;
  showInput(){
    this.isHide = true;
  }
  closeInput(){
    this.isHide = false;
  }
  @ViewChild(IonModal) modal: IonModal;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

 
   logCurrentNetworkStatus = async () => {
    const status = await Network.getStatus();
  
    console.log('Network status:', status);
  };

  choosedCat(cat){
    this.selectCat = cat;
    this.fruitsOfCat = this.listFruits.filter(fruit => fruit.family == this.selectCat);
  }

  toPage(obj) {
    localStorage.setItem("fruit", JSON.stringify(obj));
    localStorage.setItem("colorfruit", JSON.stringify(obj.color));
    localStorage.setItem("imgfruit", JSON.stringify(obj.img));
    this.router.navigate(['detail'])
  }

}
