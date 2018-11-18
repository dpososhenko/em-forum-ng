import { Component, OnInit } from '@angular/core';
import { CLH, CLL, CLM } from './categories.config';
import { CategoryLevel } from 'src/app/core/category.interface';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  public clhList = [];
  public clmList = [];
  public cllList = [];

  public CategoryLevel = CategoryLevel;

  constructor() { }

  ngOnInit() {
    this.clhList = CLH;
  }

  selectCategory(data: { level: CategoryLevel, id: string }) {
    switch (data.level) {
      case CategoryLevel.HIGH:
        this.clmList = CLM.filter(clm => clm.parent === data.id);
        break;
      case CategoryLevel.MEDIUM:
        this.cllList = CLL.filter(cll => cll.parent === data.id);
        break;
      case CategoryLevel.LOW:
        break;
    }
  }
}
