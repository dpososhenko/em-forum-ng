import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthWidgetComponent } from './auth-widget/auth-widget.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AuthWidgetComponent,
  ],
  exports: [
    AuthWidgetComponent,
  ]
})
export class AuthModule { }
