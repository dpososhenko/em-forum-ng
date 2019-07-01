import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import { catchError, switchMap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { LoginPayload, LoginResponse } from './auth.config';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {

  @Effect()
  login$ = this.actions$.pipe(
    ofType(AuthActions.LOGIN),
    switchMap((payload: LoginPayload) => this.authService.login(payload)),
    switchMap((response: LoginResponse) => [
      new AuthActions.SetAuthenticated(true),
      new AuthActions.SetAdministration(response.admin),
    ]),
    catchError(() => of(console.log('Login Error'))),
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
  ) {}
}
