import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
