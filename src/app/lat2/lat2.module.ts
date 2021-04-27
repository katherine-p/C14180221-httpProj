import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lat2PageRoutingModule } from './lat2-routing.module';

import { Lat2Page } from './lat2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lat2PageRoutingModule
  ],
  declarations: [Lat2Page]
})
export class Lat2PageModule {}
