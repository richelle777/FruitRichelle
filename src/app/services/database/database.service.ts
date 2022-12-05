import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import * as cordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  fruits = [];
  constructor(private storage: Storage) {
  }
  async dbInitializer() {
    await this.storage.create();//permet de creer la bd si elle n'existe pas
    await this.storage.defineDriver(cordovaSQLiteDriver)//definit quel type de driver utiliser pour notre application
  }
  async creation(objFruit, tableName) {
    let fruits = [];
    
    this.storage.get(tableName).then((reponse => {
      if (reponse) {
        fruits = reponse;
      }
      fruits.push(objFruit)
      this.storage.set(tableName, fruits).then((data => {
        console.log("good");
      })).catch((rep => {
        console.log("error");
      }));
    }));
  }
  async suppression(tableName) {
    this.storage.remove(tableName);
  }
  async lecture(tableName) {
    const list_fruits = await this.storage.get(tableName);
    if (list_fruits) {
      this.fruits = list_fruits;
    }
    return this.fruits;
  }
  // async deleteFruit(id){
  //   this.localforage.removeItem(id).then((data => {
  //     console.log("delete good")
  //   })).catch((res =>{
  //     console.log("delete not good")
      
  //   }));
  // }
}
