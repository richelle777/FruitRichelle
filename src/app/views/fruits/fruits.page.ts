import { CategorieService } from './../../services/categorie/categorie.service';
import { Component, OnInit , ViewChild } from '@angular/core';
import { FruitService } from 'src/app/services/fruit/fruit.service';
import { GetFruitsService } from 'src/app/services/getFruits/get-fruits.service';
import { DatabaseService } from 'src/app/services/database/database.service';
import { interval } from 'rxjs';
import { ActionSheetController } from '@ionic/angular';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Network } from '@capacitor/network';

Network.addListener('networkStatusChange', status => {
  console.log('Network status changed', status);
});

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.page.html',
  styleUrls: ['./fruits.page.scss'],
})
export class FruitsPage implements OnInit {
  isConnected : any;
  logCurrentNetworkStatus : any;
  status:any;     
  listFruitBd = [];
  listFruits : any;
  resultsOfFilter = [];
  listFruitsFinal = [];
  listFruitsFinalSet = new Set();
  infoSave : string;
  isOk = true;
  imgColorFruits = [{"img":"assets/img/orange-fruit.png" , "color":"frorange"} , {"img":"assets/img/realistic-orange.png" , "color":"frorangeextralight"} , {"img":"assets/img/mangue-entiere.png" , "color":"frorange"} , {"img":"assets/img/liquide-fruit-ananas.png" , "color":"fryellowlight"} , {"img":"assets/img/fresh-red-plum.png" , "color":"frorange"} , {"img":"assets/img/ripe-bananas.png" , "color":"fryellowlight"} , {"img":"assets/img/ripe-whole.png" , "color":"frgreenlight"} , {"img":"assets/img/realistic-grapes.png" , "color":"fryellowlight"} , {"img":"assets/img/fruits-melon.png" , "color":"frgreenlight"} , {"img":"assets/img/abricots.png" , "color":"frgreenlight"} , {"img":"assets/img/cerise-branche.png" , "color":"frorange"} , {"img":"assets/img/composition.png" , "color":"frorange"} , {"img":"assets/img/croquis.png" , "color":"frpurplelight"} , {"img":"assets/img/fruit-goyave.png" , "color":"frorange"} , {"img":"assets/img/ripe-bananas.png" , "color":"fryellowlight"} , {"img":"assets/img/kiwi.png" , "color":"frorangeextralight"} , {"img":"assets/img/ripe-bananas.png" , "color":"fryellowlight"} , {"img":"assets/img/ripe-whole.png" , "color":"frgreenlight"} , {"img":"assets/img/realistic-grapes.png" , "color":"fryellowlight"} , {"img":"assets/img/mangue-entiere.png" , "color":"frorange"} , {"img":"assets/img/realistic-mango.png" , "color":"frorangeextralight"} , {"img":"assets/img/realistic-mango.png" , "color":"frorangeextralight"} , {"img":"assets/img/orange-fruit.png" , "color":"frorange"} , {"img":"assets/img/orange-fruit.png" , "color":"frorange"} , {"img":"assets/img/orange-fruit.png" , "color":"frorange"} , {"img":"assets/img/orange-fruit.png" , "color":"frorange"} , {"img":"assets/img/orange-fruit.png" , "color":"frorange"} , {"img":"assets/img/composition.png" , "color":"frorange"} , {"img":"assets/img/liquide-fruit-ananas.png" , "color":"fryellowlight"} , {"img":"assets/img/orange-fruit.png" , "color":"frorange"} , {"img":"assets/img/liquide-fruit-ananas.png" , "color":"fryellowlight"} , {"img":"assets/img/liquide-fruit-ananas.png" , "color":"fryellowlight"} , {"img":"assets/img/ripe-whole.png" , "color":"frgreenlight"} , {"img":"assets/img/realistic-grapes.png" , "color":"fryellowlight"} , {"img":"assets/img/fruits-melon.png" , "color":"frgreenlight"} ,{"img":"assets/img/realistic-grapes.png" , "color":"fryellowlight"} , {"img":"assets/img/liquide-fruit-ananas.png" , "color":"fryellowlight"} , {"img":"assets/img/fresh-red-plum.png" , "color":"frorange"} , {"img":"assets/img/ripe-bananas.png" , "color":"fryellowlight"}]
  

  constructor(private router: Router ,  public alertController: AlertController ,private getFruitService: GetFruitsService , private dbService:DatabaseService) {
    this.getFruitService.getListeFruits().then((reponse) => {
    this.listFruits = reponse
    this.resultsOfFilter = this.listFruits
    for (let i = 0; i < this.listFruits.length; i++) {
      // console.log(this.listFruits[i]);
      
      this.dbService.creation(this.listFruits[i] , 'fruits')
      Object.defineProperty(this.listFruits[i], 'img', {
        value: this.imgColorFruits[i].img,
        writable: true
      });
      Object.defineProperty(this.listFruits[i], 'color', {
        value: this.imgColorFruits[i].color,
        writable: true
      });
    }
    // }for(let i = 0 ; i < 39; i++){
    //   // this.listFruitBd.push(this.listFruits[i])
    //   this.dbService.creation(this.listFruits[i] , 'fruits')
    //   console.log(this.listFruits[i]);
      
    // }
    const interval$ = interval();
    interval$.subscribe(value => this.dbService.lecture("fruits").then((rep => {
      this.listFruitBd = rep;
      console.log(this.listFruitBd);
    })));
    setInterval(() => {
      this.logCurrentNetworkStatus = async () => {
          this.status = await Network.getStatus();
          this.isConnected = this.status.connected
          // console.log(this.isConnected)
          if(this.isConnected){
            this.listFruitsFinal = this.listFruits;
          }else{
            this.listFruitsFinal = this.listFruitBd;
          }

          // console.log(this.listFruitsFinal);
          
          // this.dbService.lecture("fruits").then((rep => {
          //   this.listFruitBd = rep;
          //   for(let i = 0 ; i < 39; i++){
          //     // this.listFruitBd.push(this.listFruits[i])
          //     this.dbService.creation(this.listFruits[i] , 'fruits')
          //     console.log(this.listFruits[i]);
              
          //   }
          //   // console.log(this.listFruitBd);
          // }))
        };
        this.logCurrentNetworkStatus();
    }, 1000);
  });
    
  }

  ngOnInit() {
    
  }
   
   
  IonViewDidEnter(){
  }
  async showDialog(){
    const alert = await this.alertController.create(
      { 
        header: this.infoSave,
        buttons: [{
          text: 'OK',
          cssClass:'button-action',
          handler: (blah) => {console.log("");}}
      ]
      }
    );
    await alert.present();
    const {role} = await alert.onDidDismiss();
    // console.log('onDidDismiss resolved with role', role);
  }
  handleChange(event) {
    const query = event.target.value.toLowerCase();
    this.resultsOfFilter = this.listFruits.filter(d => (d.family.toLowerCase().indexOf(query) > -1) || (d.name.toLowerCase().indexOf(query) > -1));
  }
  @ViewChild(IonModal) modal: IonModal;

  name: String;
  id: number;
  genus: String;
  order: String;
  rosales: String;
  carbohydrates: any;
  protein: any;
  fat: any;
  calories: any;
  sugar: any;
  family: String;
  nutritions = {};

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }
    
  confirm() {
    
    this.id = Math.round(Math.random() * (30- 1) + 1 * 100) / 100;

    Object.defineProperty(this.nutritions, 'carbohydrates', {
      value: this.carbohydrates,
      writable: true
    });
    Object.defineProperty(this.nutritions, 'protein', {
      value: this.protein,
      writable: true
    });
     Object.defineProperty(this.nutritions, 'fat', {
      value: this.fat,
      writable: true
    });
     Object.defineProperty(this.nutritions, 'calories', {
      value: this.calories,
      writable: true
    });
     Object.defineProperty(this.nutritions, 'sugar', {
      value: this.sugar,
      writable: true
    });
    if(this.family != null && this.fat != null && this.genus != null && this.protein != null && this.name !=null && this.order != null && this.carbohydrates != null && this.calories != null && this.sugar != null){
      this.isOk = true
    }
    else{
      this.isOk = false
    }
    // console.log(this.isOk);
    
  if (this.isOk){
    let fruit = {"id" : this.id , "name" : this.name , "genus" : this.genus ,"order" : this.order, "family" : this.family , "nutritions" : this.nutritions};
    // console.log(fruit)
    this.dbService.creation(fruit , "fruits").then(() => {
      this.infoSave = "Save Successfully";
      this.showDialog();
    }
    ).catch(() => {
      this.infoSave = "Save Failed , Please Retry";
    }

    );
    this.modal.dismiss(this.name , 'confirm');
    this.modal.dismiss(this.order, 'confirm');
    this.modal.dismiss(this.genus, 'confirm');
    this.modal.dismiss(this.family, 'confirm');
    this.modal.dismiss(this.carbohydrates, 'confirm');
    this.modal.dismiss(this.protein, 'confirm');
    this.modal.dismiss(this.fat, 'confirm');
    this.modal.dismiss(this.calories, 'confirm');
    this.modal.dismiss(this.sugar, 'confirm');
  }
  }


  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
  }

  toPage(obj) {
    localStorage.setItem("fruit", JSON.stringify(obj));
    localStorage.setItem("colorfruit", JSON.stringify(obj.color));
    localStorage.setItem("imgfruit", JSON.stringify(obj.img));
    this.router.navigate(['detail'])
  }
}
