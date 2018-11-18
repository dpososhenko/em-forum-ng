import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesUploaderComponent } from './images-uploader/images-uploader.component';
import { CategoriesComponent } from './categories/categories.component';
import { MatDialogModule, MatIconModule } from '@angular/material';
import { CategoriesListComponent } from './categories-list/categories-list.component';

@NgModule({
  imports: [
    CommonModule,

    MatIconModule,
    MatDialogModule,
  ],
  declarations: [
    ImagesUploaderComponent,
    CategoriesComponent,
    CategoriesListComponent,
  ],
  exports: [
    MatIconModule,
    MatDialogModule,

    ImagesUploaderComponent,
    CategoriesComponent,
    CategoriesListComponent,
  ],
  entryComponents: [
    CategoriesComponent,
  ],
})
export class SharedModule { }
