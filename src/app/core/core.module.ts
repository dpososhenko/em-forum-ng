import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth/auth.effects';
import { AuthService } from './auth/auth.service';
import { AdminGuard } from './admin/admin.guard';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([
      AuthEffects,
    ]),
  ],
  providers: [
    AuthService,
    AdminGuard,
  ],
})
export class CoreModule {}
