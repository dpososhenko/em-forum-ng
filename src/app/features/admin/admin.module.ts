import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatAutocompleteModule,
  ],
  declarations: [
    AdminCategoriesComponent,
  ],
  exports: [
    AdminRoutingModule,

    AdminCategoriesComponent,
  ]
})
export class AdminModule {
}
