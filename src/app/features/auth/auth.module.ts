import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthWidgetComponent } from './auth-widget/auth-widget.component';
import { MatButtonModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,

    MatIconModule,
    MatButtonModule,
  ],
  declarations: [
    AuthWidgetComponent,
  ],
  exports: [
    AuthWidgetComponent,
  ]
})
export class AuthModule { }
