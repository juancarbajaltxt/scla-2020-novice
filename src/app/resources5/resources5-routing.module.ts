import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Resources5Page } from './resources5.page';

const routes: Routes = [
  {
    path: '',
    component: Resources5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Resources5PageRoutingModule {}
