import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Resources8PageRoutingModule } from './resources8-routing.module';

import { Resources8Page } from './resources8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Resources8PageRoutingModule
  ],
  declarations: [Resources8Page]
})
export class Resources8PageModule {}
