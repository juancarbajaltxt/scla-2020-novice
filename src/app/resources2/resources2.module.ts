import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Resources2PageRoutingModule } from './resources2-routing.module';

import { Resources2Page } from './resources2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Resources2PageRoutingModule
  ],
  declarations: [Resources2Page]
})
export class Resources2PageModule {}
