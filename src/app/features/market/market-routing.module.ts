import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketComponent } from './market.component';
import { MarketAddComponent } from './market-add/market-add.component';

const routes: Routes = [
  {
    path: '',
    component: MarketComponent,
  },

  {
    path: 'add',
    component: MarketAddComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MarketRoutingModule { }
