import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  
  {
    path: 'resources',
    loadChildren: () => import('./resources/resources.module').then( m => m.ResourcesPageModule)
  },

  {
    path: 'resources2',
    loadChildren: () => import('./resources2/resources2.module').then( m => m.Resources2PageModule)
  },
  {
    path: 'resources3',
    loadChildren: () => import('./resources3/resources3.module').then( m => m.Resources3PageModule)
  },
  {
    path: 'resources4',
    loadChildren: () => import('./resources4/resources4.module').then( m => m.Resources4PageModule)
  },
  {
    path: 'resources5',
    loadChildren: () => import('./resources5/resources5.module').then( m => m.Resources5PageModule)
  },
  {
    path: 'resources6',
    loadChildren: () => import('./resources6/resources6.module').then( m => m.Resources6PageModule)
  },
  {
    path: 'resources7',
    loadChildren: () => import('./resources7/resources7.module').then( m => m.Resources7PageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
