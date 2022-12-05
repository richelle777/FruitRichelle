import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalFruitPageRoutingModule } from './modal-fruit-routing.module';

import { ModalFruitPage } from './modal-fruit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalFruitPageRoutingModule
  ],
  declarations: [ModalFruitPage]
})
export class ModalFruitPageModule {}
