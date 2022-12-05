import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet , Platform } from '@ionic/angular';
import { Optional } from '@angular/core';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  constructor(private platform:Platform , @Optional() private routerOutlet?:IonRouterOutlet ) {
    this.platform.backButton.subscribeWithPriority(-1 , () => {
      if(!this.routerOutlet.canGoBack()){
        App.exitApp();
      }
    });
  }

  ngOnInit() {
  }

}
