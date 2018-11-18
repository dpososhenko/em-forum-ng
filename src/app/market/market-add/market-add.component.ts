import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CategoriesComponent } from '../../shared/categories/categories.component';

@Component({
  selector: 'app-market-add',
  templateUrl: './market-add.component.html',
  styleUrls: ['./market-add.component.scss']
})
export class MarketAddComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  openCategoriesDialog() {
    this.dialog.open(CategoriesComponent, {
      minWidth: '60%',
      height: '40vh'
    });
  }

}
