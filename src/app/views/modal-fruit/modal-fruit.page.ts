import { Fruit } from './../../classes/fruit';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { DatabaseService } from 'src/app/services/database/database.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-modal-fruit',
  templateUrl: './modal-fruit.page.html',
  styleUrls: ['./modal-fruit.page.scss'],
})
export class ModalFruitPage implements OnInit {

  constructor(public modalCtrl: ModalController , private dbService:DatabaseService , public alertController: AlertController) { }

  id: number;
  name: String;
  genus: String;
  order: String;
  rosales: String;
  carbohydrates: number;
  protein: number;
  fat: number;
  calories: number;
  sugar: number;
  family: String;
  nutritions = {};
  isOk = true;
  infoSave: string;
  fruit: Fruit = new Fruit();
  ngOnInit() {
  }
  async showDialog() {
    const alert = await this.alertController.create(
      {
        header: this.infoSave,
        buttons: [{
          text: 'OK',
          cssClass: 'button-action',
          handler: (blah) => { console.log(""); }
        }
        ]
      }
    );
    await alert.present();
    const { role } = await alert.onDidDismiss();
    // console.log('onDidDismiss resolved with role', role);
  }
  async confirm() {

    // this.showFruitBd();
    this.id = Math.round(Math.random() * (30 - 1) + 1 * 100) / 100;
    if (this.fruit.family != null && this.fruit.fat != null && this.fruit.genus != null && this.fruit.protein != null && this.fruit.name != null && this.fruit.order != null && this.fruit.carbohydrates != null && this.fruit.calories != null && this.fruit.sugar != null) {
      this.isOk = true
    }
    else {
      this.isOk = false
    }
    console.log(this.isOk);

    if (this.isOk) {
      this.nutritions = {"carbohydrates": this.fruit.carbohydrates , "protein": this.fruit.protein , "fat": this.fruit.fat , "calories": this.fruit.calories , "sugar": this.fruit.sugar}
      let fruit = { "id": this.id, "name": this.fruit.name, "genus": this.fruit.genus, "order": this.fruit.order, "family": this.fruit.family, "nutritions": this.nutritions , "img":"assets/img/realistic-orange.png" , "color":"frorangeextralight"};
      console.log(fruit)
      await this.dbService.creation(fruit, "fruits").then(async () => {
        this.infoSave = "Save Successfully";
        this.showDialog();
        await this.modalCtrl.dismiss();
      }
      ).catch(() => {
        this.infoSave = "Save Failed , Please Retry";
      }
      );
      //   this.showFruitBd();
      //   this.modal.dismiss(this.name, 'confirm');
      //   this.modal.dismiss(this.order, 'confirm');
      //   this.modal.dismiss(this.genus, 'confirm');
      //   this.modal.dismiss(this.family, 'confirm');
      //   this.modal.dismiss(this.carbohydrates, 'confirm');
      //   this.modal.dismiss(this.protein, 'confirm');
      //   this.modal.dismiss(this.fat, 'confirm');
      //   this.modal.dismiss(this.calories, 'confirm');
      //   this.modal.dismiss(this.sugar, 'confirm');
      //   this.modal.dismiss( this.showFruitBd());
      //   this.showFruitBd();
      // }
    }


  }
  
  async cancel() {
    return await this.modalCtrl.dismiss();
  }
}
