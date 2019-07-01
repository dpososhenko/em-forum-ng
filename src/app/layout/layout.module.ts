import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
  MatIconModule,
  MatSelectModule,
  MatButtonModule,
} from '@angular/material';

import { AuthModule } from '../features/auth/auth.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,

    MatIconModule,
    MatSelectModule,
    MatButtonModule,

    AuthModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SearchComponent,
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatSelectModule,

    HeaderComponent,
    FooterComponent,
    SearchComponent,
  ]
})
export class LayoutModule { }
