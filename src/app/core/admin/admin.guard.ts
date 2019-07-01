import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AppState } from 'src/app/core/app-state.interface';
import { select, Store } from '@ngrx/store';
import { getAdmin } from '../auth/auth.selectors';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(
    private store: Store<AppState>,
    private router: Router,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.pipe(
      select(getAdmin),
      tap((isAdmin: boolean) => isAdmin || this.router.navigate([''])),
    );
  }
}
