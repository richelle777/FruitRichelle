import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../views/home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'fruits',
        loadChildren: () => import('../views/fruits/fruits.module').then( m => m.FruitsPageModule)
      },
      {
        path: 'apropos',
        loadChildren: () => import('../views/apropos/apropos.module').then( m => m.AproposPageModule)
      },
      {
        path: 'favoris',
        loadChildren: () => import('../views/favoris/favoris.module').then( m => m.FavorisPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
