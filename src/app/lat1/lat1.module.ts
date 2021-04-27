import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lat1PageRoutingModule } from './lat1-routing.module';

import { Lat1Page } from './lat1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lat1PageRoutingModule
  ],
  declarations: [Lat1Page]
})
export class Lat1PageModule {}
