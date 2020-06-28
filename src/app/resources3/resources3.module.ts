import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Resources3PageRoutingModule } from './resources3-routing.module';

import { Resources3Page } from './resources3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Resources3PageRoutingModule
  ],
  declarations: [Resources3Page]
})
export class Resources3PageModule {}
