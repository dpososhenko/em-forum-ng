import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketComponent } from './market.component';
import { MarketFilterComponent } from './market-filter/market-filter.component';
import { MarketListComponent } from './market-list/market-list.component';
import { MarketAddComponent } from './market-add/market-add.component';
import { MarketRoutingModule } from './market-routing.module';
import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
} from '@angular/material';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MarketRoutingModule,
    SharedModule,

    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
  ],
  declarations: [
    MarketComponent,
    MarketFilterComponent,
    MarketListComponent,
    MarketAddComponent,
  ],
  exports: [
    MarketRoutingModule,

    MarketComponent,
    MarketFilterComponent,
    MarketListComponent,
    MarketAddComponent,
  ]
})
export class MarketModule { }
