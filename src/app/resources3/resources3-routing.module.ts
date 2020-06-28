import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Resources3Page } from './resources3.page';

const routes: Routes = [
  {
    path: '',
    component: Resources3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Resources3PageRoutingModule {}
