import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Network } from '@capacitor/network';
import * as cordovaSQLiteDriver from 'localforage-cordovasqlitedriver';

Network.addListener('networkStatusChange', status => {
  console.log('Network status changed', status);
});

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  fruits = [];
  logCurrentNetworkStatus : any;
  status:any;     
  constructor(private storage: Storage) {
   
  }
  async dbInitializer() {
    await this.storage.create();//permet de creer la bd si elle n'existe pas
    await this.storage.defineDriver(cordovaSQLiteDriver)//definit quel type de driver utiliser pour notre application
  }
  async creation(objFruit, tableName) {
    let fruits = [];
    const reponse = await this.storage.get(tableName);
    if (reponse) {
      fruits = reponse;
    }
    fruits.push(objFruit)
    this.storage.set(tableName, fruits);
  }
  async connection(tableName){
    return this.storage.get(tableName);
  }
  async addConnection(connect , tableName){
    let connection = [];
    connection.push(connect);
    this.storage.set(tableName, connect);
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
