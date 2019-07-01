import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Complexes, ComplexTypes } from 'src/app/core/complex/complex.config';
import { Store, select } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { getComplex } from 'src/app/core/complex/complex.selectors';
import { ChangeComplex } from 'src/app/core/complex/complex.actions';
import { MatSelectChange } from '@angular/material';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public searchInput: FormControl = new FormControl('');
  public complexes = Complexes;
  public chosenComplex$: Observable<ComplexTypes>;
  public isSearchFocused$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private store: Store<{ complex: ComplexTypes }>,
  ) {}

  ngOnInit() {
    this.chosenComplex$ = this.store.pipe(select(getComplex));
  }

  public complexChanged(event: MatSelectChange) {
    this.store.dispatch(new ChangeComplex(event.value));
  }
}
