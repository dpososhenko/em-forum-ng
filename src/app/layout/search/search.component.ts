import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CookieSpecific } from 'src/app/core/cookie/cookie.config';
import { Complexes, ComplexTypes } from 'src/app/core/complex/complex.config';
import { CookieService } from 'src/app/core/cookie/cookie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @ViewChild('searchInputRef') searchInputRef: ElementRef;

  public isSearchFieldFocused = false;
  public showSearchFeature = false;
  public searchInput: FormControl;
  public complexes = Complexes;
  public chosenComplex: string;

  constructor() {}

  ngOnInit() {
    this.showSearchFeature = !!CookieService.getCookie('all.features.search');
    this.chosenComplex = ComplexTypes.All;
    this.searchInput = new FormControl('');
  }

  @CookieSpecific('all.features.search')
  public focusSearchInput() {
    this.isSearchFieldFocused = true;
    this.searchInputRef.nativeElement.focus();
  }

  @CookieSpecific('all.features.search')
  public onBlurSearchInput() {
    this.isSearchFieldFocused = false;
  }

}
