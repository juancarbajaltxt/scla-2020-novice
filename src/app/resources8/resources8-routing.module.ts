import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Resources8Page } from './resources8.page';

const routes: Routes = [
  {
    path: '',
    component: Resources8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Resources8PageRoutingModule {}
