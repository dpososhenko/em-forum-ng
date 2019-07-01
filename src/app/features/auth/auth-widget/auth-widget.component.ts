import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/core/app-state.interface';
import { getAuthenticated } from 'src/app/core/auth/auth.selectors';
import { Login } from 'src/app/core/auth/auth.actions';
import { LoginPayload } from 'src/app/core/auth/auth.config';

@Component({
  selector: 'app-auth-widget',
  templateUrl: './auth-widget.component.html',
  styleUrls: ['./auth-widget.component.scss']
})
export class AuthWidgetComponent implements OnInit {
  public isAuthenticated$: Observable<boolean>;

  constructor(
    private store: Store<AppState>,
  ) {}

  ngOnInit() {
    this.isAuthenticated$ = this.store.pipe(select(getAuthenticated));
  }

  public login(): void {
    const loginPayload: LoginPayload = {
      email: 'email',
      password: 'password',
    };
    this.store.dispatch(new Login(loginPayload));
  }
}
