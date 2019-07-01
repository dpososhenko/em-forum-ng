import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CategoriesComponent } from 'src/app/shared/categories/categories.component';
import { Category } from 'src/app/core/category.interface';
import { FormBuilder, Validators } from '@angular/forms';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-market-add',
  templateUrl: './market-add.component.html',
  styleUrls: ['./market-add.component.scss']
})
export class MarketAddComponent implements OnInit {
  selectedCategory: Category;
  marketAddForm = this.fb.group({
    title: ['', Validators.required],
    description: [''],
    category_id: [''],
  });

  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {}

  openCategoriesDialog() {
    const categoryDialog = this.dialog.open(CategoriesComponent, {
      minWidth: '60vw',
      height: '40vh',
      panelClass: 'dialog__panel-scroll',
    });

    categoryDialog.afterClosed()
      .pipe(takeWhile(category => category))
      .subscribe(category => {
        this.selectedCategory = category;

        this.marketAddForm.patchValue({
          category_id: category._id,
        });
      });
  }

  onSubmit() {
    console.log(this.marketAddForm.value);
  }

}
