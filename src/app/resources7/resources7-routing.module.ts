import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Resources7Page } from './resources7.page';

const routes: Routes = [
  {
    path: '',
    component: Resources7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Resources7PageRoutingModule {}
