import { CategorieService } from './../../services/categorie/categorie.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FruitService } from 'src/app/services/fruit/fruit.service';
import { GetFruitsService } from 'src/app/services/getFruits/get-fruits.service';
import { DatabaseService } from 'src/app/services/database/database.service';
import { interval } from 'rxjs';
import { ActionSheetController, ToastController } from '@ionic/angular';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Network } from '@capacitor/network';
import { ModalController, NavParams } from '@ionic/angular';
import { ModalFruitPage } from '../modal-fruit/modal-fruit.page';

Network.addListener('networkStatusChange', status => {
  console.log('Network status changed', status);
});

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.page.html',
  styleUrls: ['./fruits.page.scss'],
})
export class FruitsPage implements OnInit {
  isConnected: any;
  logCurrentNetworkStatus: any;
  status: any;
  listFruitBd = [];
  listFruits: any;
  resultsOfFilter = [];
  listFruitsFinal = [];
  listFruitsFinalSet = new Set();

  listFruitsbef: any;
  imgColorFruits = [{ "img": "assets/img/orange-fruit.png", "color": "frorange" }, { "img": "assets/img/realistic-orange.png", "color": "frorangeextralight" }, { "img": "assets/img/mangue-entiere.png", "color": "frorange" }, { "img": "assets/img/liquide-fruit-ananas.png", "color": "fryellowlight" }, { "img": "assets/img/fresh-red-plum.png", "color": "frorange" }, { "img": "assets/img/ripe-bananas.png", "color": "fryellowlight" }, { "img": "assets/img/ripe-whole.png", "color": "frgreenlight" }, { "img": "assets/img/realistic-grapes.png", "color": "fryellowlight" }, { "img": "assets/img/fruits-melon.png", "color": "frgreenlight" }, { "img": "assets/img/abricots.png", "color": "frgreenlight" }, { "img": "assets/img/cerise-branche.png", "color": "frorange" }, { "img": "assets/img/composition.png", "color": "frorange" }, { "img": "assets/img/croquis.png", "color": "frpurplelight" }, { "img": "assets/img/fruit-goyave.png", "color": "frorange" }, { "img": "assets/img/ripe-bananas.png", "color": "fryellowlight" }, { "img": "assets/img/kiwi.png", "color": "frorangeextralight" }, { "img": "assets/img/ripe-bananas.png", "color": "fryellowlight" }, { "img": "assets/img/ripe-whole.png", "color": "frgreenlight" }, { "img": "assets/img/realistic-grapes.png", "color": "fryellowlight" }, { "img": "assets/img/mangue-entiere.png", "color": "frorange" }, { "img": "assets/img/realistic-mango.png", "color": "frorangeextralight" }, { "img": "assets/img/realistic-mango.png", "color": "frorangeextralight" }, { "img": "assets/img/orange-fruit.png", "color": "frorange" }, { "img": "assets/img/orange-fruit.png", "color": "frorange" }, { "img": "assets/img/orange-fruit.png", "color": "frorange" }, { "img": "assets/img/orange-fruit.png", "color": "frorange" }, { "img": "assets/img/orange-fruit.png", "color": "frorange" }, { "img": "assets/img/composition.png", "color": "frorange" }, { "img": "assets/img/liquide-fruit-ananas.png", "color": "fryellowlight" }, { "img": "assets/img/orange-fruit.png", "color": "frorange" }, { "img": "assets/img/liquide-fruit-ananas.png", "color": "fryellowlight" }, { "img": "assets/img/liquide-fruit-ananas.png", "color": "fryellowlight" }, { "img": "assets/img/ripe-whole.png", "color": "frgreenlight" }, { "img": "assets/img/realistic-grapes.png", "color": "fryellowlight" }, { "img": "assets/img/fruits-melon.png", "color": "frgreenlight" }, { "img": "assets/img/realistic-grapes.png", "color": "fryellowlight" }, { "img": "assets/img/liquide-fruit-ananas.png", "color": "fryellowlight" }, { "img": "assets/img/fresh-red-plum.png", "color": "frorange" }, { "img": "assets/img/ripe-bananas.png", "color": "fryellowlight" }]
  testConnection: any;

  constructor(public toast: ToastController, public modalCtrl: ModalController, private router: Router, public alertController: AlertController, private getFruitService: GetFruitsService, private dbService: DatabaseService) {

    this.dbService.connection("connection").then((data) => {
      this.testConnection = data
      console.log(data);

      if (!this.testConnection) {
        this.getFruitService.getListeFruits().then(async (reponse) => {
          this.listFruits = reponse
          for (const f of this.listFruits) {
            console.log(f);
            
            await this.dbService.creation(f, 'fruits')

          }
          this.dbService.addConnection("connecte", "connection");

          this.showFruitBd()
          console.log(this.resultsOfFilter);

          console.log("test");
          console.log("connexion failed");
          // this.resultsOfFilter = this.listFruits;
          console.log("connexion successfully");
          // console.log(this.listFruits);

          // this.resultsOfFilter = this.listFruits

          // alert(this.testConnection)
          // console.log(this.testConnection);



          // }for(let i = 0 ; i < 39; i++){
          //   // this.listFruitBd.push(this.listFruits[i])
          //   this.dbService.creation(this.listFruits[i] , 'fruits')
          //   console.log(this.listFruits[i]);

          // }
          // setInterval(() => {
          //   this.logCurrentNetworkStatus = async () => {
          //     this.status = await Network.getStatus();
          //     this.isConnected = this.status.connected
          //     // console.log(this.isConnected)
          //     if (this.isConnected) {
          //       this.listFruitsFinal = this.listFruits;
          //     } else {
          //       this.listFruitsFinal = this.listFruitBd;
          //     }

          //     // console.log(this.listFruitsFinal);

          //     // this.dbService.lecture("fruits").then((rep => {
          //     //   this.listFruitBd = rep;
          //     //   for(let i = 0 ; i < 39; i++){
          //     //     // this.listFruitBd.push(this.listFruits[i])
          //     //     this.dbService.creation(this.listFruits[i] , 'fruits')
          //     //     console.log(this.listFruits[i]);

          //     //   }
          //     //   // console.log(this.listFruitBd);
          //     // }))
          //   };
          //   this.logCurrentNetworkStatus();
          // }, 1000);
        });

      }
      else {
        this.showFruitBd();
        console.log(this.resultsOfFilter);

        console.log("test");
        console.log("connexion failed");
      }
    });

  }

  showFruitBd() {
    this.dbService.lecture("fruits").then((rep => {
      this.listFruitBd = rep;
      this.resultsOfFilter = this.listFruitBd
    for( let i =0 ; i < this.resultsOfFilter.length ; i++){
      Object.defineProperty(this.resultsOfFilter[i], 'img', {
          value: this.imgColorFruits[i].img,
          writable: true
        });
        Object.defineProperty(this.resultsOfFilter[i], 'color', {
          value: this.imgColorFruits[i].color,
          writable: true
       });
    }
    }))
  }

  // showToast(msgToast: string){
  //   toast.show({text:msgToast , duration:"long" , position:"top"})
  // }



  ngOnInit() {
  }

  handleChange(event) {
    const query = event.target.value.toLowerCase();
    this.resultsOfFilter = this.listFruitBd.filter(d => (d.family.toLowerCase().indexOf(query) > -1) || (d.name.toLowerCase().indexOf(query) > -1));
  }
  @ViewChild(IonModal) modal: IonModal;


  cancel() {
    this.modal.dismiss(null, 'cancel');
  }
  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalFruitPage,
      componentProps: { value: 123 }
    })

    await modal.present();

    const { role, data } = await modal.onDidDismiss();
    this.showFruitBd()
    if (role === 'confirm') {

    }
  }


  ionViewDidEnter() {
    // setInterval(() => {
    //   this.logCurrentNetworkStatus = async () => {
    //       this.status = await Network.getStatus();
    //       this.isConnected = this.status.connected
    //       // alert(this.isConnected)
    //       if(this.isConnected){
    //         this.dbService.addConnection("connecte" , "connection");
    //       }
    //       console.log(this.isConnected);
    //     };
    //     this.logCurrentNetworkStatus();
    // }, 1000);
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    this.showFruitBd();
  }

  toPage(obj) {
    localStorage.setItem("fruit", JSON.stringify(obj));
    localStorage.setItem("colorfruit", JSON.stringify(obj.color));
    localStorage.setItem("imgfruit", JSON.stringify(obj.img));
    this.router.navigate(['detail'])
  }
}
