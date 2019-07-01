import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './core/admin/admin.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/market',
  },

  {
    path: 'market',
    loadChildren: 'src/app/features/market/market.module#MarketModule',
  },

  {
    path: 'driver',
    loadChildren: 'src/app/features/driver/driver.module#DriverModule',
  },

  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: 'src/app/features/admin/admin.module#AdminModule',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
