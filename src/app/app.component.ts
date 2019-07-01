import { Component, OnDestroy, OnInit } from '@angular/core';
import { appShowSearchRoutes } from './core/app.config';
import { NavigationStart, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  showSearchBar$: Observable<boolean>;
  unsubscribe$: Subject<void> = new Subject();

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
    this.showSearchBar$ = this.router.events.pipe(
      takeUntil(this.unsubscribe$),
      filter(event => event instanceof NavigationStart),
      map((event: NavigationStart) => event.url === '/' || appShowSearchRoutes.includes(event.url)),
    );
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
