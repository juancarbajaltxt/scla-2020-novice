import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Resources6Page } from './resources6.page';

const routes: Routes = [
  {
    path: '',
    component: Resources6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Resources6PageRoutingModule {}
