import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalFruitPage } from './modal-fruit.page';

const routes: Routes = [
  {
    path: '',
    component: ModalFruitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalFruitPageRoutingModule {}
