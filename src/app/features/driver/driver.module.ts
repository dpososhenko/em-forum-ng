import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverComponent } from './driver/driver.component';
import { DriverRoutingModule } from './driver-routing.module';
import { DriverAddComponent } from './driver-add/driver-add.component';
import { DriverSearchComponent } from './driver-search/driver-search.component';
import { DriverListComponent } from './driver-list/driver-list.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    DriverComponent,
    DriverAddComponent,
    DriverSearchComponent,
    DriverListComponent,
  ],
  exports: [
    DriverRoutingModule,
  ]
})
export class DriverModule { }
