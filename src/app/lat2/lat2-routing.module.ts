import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lat2Page } from './lat2.page';

const routes: Routes = [
  {
    path: '',
    component: Lat2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lat2PageRoutingModule {}
