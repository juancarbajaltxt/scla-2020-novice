import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Resources7PageRoutingModule } from './resources7-routing.module';

import { Resources7Page } from './resources7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Resources7PageRoutingModule
  ],
  declarations: [Resources7Page]
})
export class Resources7PageModule {}
