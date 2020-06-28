import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Resources4PageRoutingModule } from './resources4-routing.module';

import { Resources4Page } from './resources4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Resources4PageRoutingModule
  ],
  declarations: [Resources4Page]
})
export class Resources4PageModule {}
