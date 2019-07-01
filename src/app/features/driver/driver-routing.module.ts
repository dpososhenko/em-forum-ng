import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DriverComponent } from './driver/driver.component';
import { DriverAddComponent } from './driver-add/driver-add.component';

const routes: Routes = [
  {
    path: '',
    component: DriverComponent,
  },
  {
    path: 'add',
    component: DriverAddComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class DriverRoutingModule { }
