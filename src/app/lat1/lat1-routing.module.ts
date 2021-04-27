import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lat1Page } from './lat1.page';

const routes: Routes = [
  {
    path: '',
    component: Lat1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lat1PageRoutingModule {}
