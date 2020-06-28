import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Resources6PageRoutingModule } from './resources6-routing.module';

import { Resources6Page } from './resources6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Resources6PageRoutingModule
  ],
  declarations: [Resources6Page]
})
export class Resources6PageModule {}
