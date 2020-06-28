import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Resources4Page } from './resources4.page';

const routes: Routes = [
  {
    path: '',
    component: Resources4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Resources4PageRoutingModule {}
