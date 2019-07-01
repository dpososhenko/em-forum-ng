import { Component, OnDestroy, OnInit } from '@angular/core';
import { Category, CategoryLevel } from 'src/app/core/category.interface';
import { CategoriesService } from 'src/app/core/api/categories.service';
import { MatDialogRef } from '@angular/material';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit, OnDestroy {
  public clhList: Category[];
  public clmList: Category[];
  public cllList: Category[];
  public CategoryLevel = CategoryLevel;

  private unsubscribe$: Subject<void> = new Subject();

  constructor(
    private categoriesService: CategoriesService,
    private dialogRef: MatDialogRef<CategoriesComponent>,
  ) { }

  public ngOnInit() {
    this.categoriesService.getCollectionByLevel(CategoryLevel.HIGH)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((categories: Category[]) => {
        this.clhList = categories;
      });
  }

  public selectCategory(data): void {
    const {category, level} = data;

    category.children
      ? this.selectNextCategory(category._id, level)
      : this.selectLastCategory(category);
  }

  /**
   * @param category <Category>: selected category
   */
  private selectLastCategory(category: Category): void {
    const arr = [...this.clhList, ...this.clmList];

    if (category.parent) {
      category.parentName = this.getParentName(arr, category.parent);
    }
    if (category.grandParent) {
      category.grandParentName = this.getParentName(arr, category.grandParent);
    }

    return this.dialogRef.close(category);
  }

  private selectNextCategory(id: string, level: CategoryLevel): void {
    this.categoriesService.getCollectionByParent(id)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((categories: Category[]) => {
        if (level === CategoryLevel.HIGH) {
          this.cllList = [];
          this.clmList = categories;
        } else {
          this.cllList = categories;
        }
      });
  }

  private getParentName(arr: Category[], id: string): string {
    return arr.filter(item => item._id === id)[0].name;
  }

  public ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
