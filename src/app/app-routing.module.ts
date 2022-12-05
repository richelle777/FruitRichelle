import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full'
  },
  {
    path: 'start',
    loadChildren: () => import('./views/start/start.module').then( m => m.StartPageModule)
  },
  {
    path: 'fruits',
    loadChildren: () => import('./views/fruits/fruits.module').then( m => m.FruitsPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'favoris',
    loadChildren: () => import('./views/favoris/favoris.module').then( m => m.FavorisPageModule)
  },
  {
    path: 'apropos',
    loadChildren: () => import('./views/apropos/apropos.module').then( m => m.AproposPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./views/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'modal-fruit',
    loadChildren: () => import('./views/modal-fruit/modal-fruit.module').then( m => m.ModalFruitPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
