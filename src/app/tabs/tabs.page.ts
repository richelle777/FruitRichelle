import { Component, OnInit,  ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';
import { interval } from 'rxjs';
import { FruitService } from '../services/fruit/fruit.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  selectTab: any;
  @ViewChild('tabs') tabs: IonTabs;
  size : number;
  constructor(private fruitService:FruitService) { }

  ngOnInit() {
    const interval$ = interval();
    interval$.subscribe(value => {this.size = this.fruitService.showFavoriteFruits().size});
  }

  setCurrentTab(event) {
    this.selectTab = this.tabs.getSelected();
  }

}
