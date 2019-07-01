import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/app-state.interface';
import { getAdmin } from '../../core/auth/auth.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  public isNavActive: boolean;
  public isAdmin$: Observable<boolean>;

  constructor(
    private store: Store<AppState>,
  ) {}

  ngOnInit() {
    this.isNavActive = false;

    this.isAdmin$ = this.store.select(getAdmin);
  }

  public toggleNav() {
    this.isNavActive = !this.isNavActive;
  }

}
