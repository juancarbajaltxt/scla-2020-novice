import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Resources5PageRoutingModule } from './resources5-routing.module';

import { Resources5Page } from './resources5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Resources5PageRoutingModule
  ],
  declarations: [Resources5Page]
})
export class Resources5PageModule {}
