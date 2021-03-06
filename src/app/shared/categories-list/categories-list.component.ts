import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Category, CategoryLevel } from 'src/app/core/category.interface';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesListComponent {
  @Input() public categoriesList: Category[];
  @Input() public categoryLevel: CategoryLevel;
  @Output() public categorySelected = new EventEmitter<{ level: CategoryLevel, category: Category }>();

  constructor() {
  }

}
