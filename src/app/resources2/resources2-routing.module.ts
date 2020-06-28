import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Resources2Page } from './resources2.page';

const routes: Routes = [
  {
    path: '',
    component: Resources2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Resources2PageRoutingModule {}
