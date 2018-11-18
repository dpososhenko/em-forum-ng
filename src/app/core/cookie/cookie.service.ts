import { ComplexTypes } from '../complex/complex.config';
import { CookieModule } from './cookie.config';

export class CookieService {

  constructor() {}

  static setCookie(
    apartmentComplex: ComplexTypes,
    module: CookieModule,
    cookie: string,
    value: string | number | boolean
  ) {
    document.cookie = `${ apartmentComplex }${ module }${ cookie }=${ value.toString() }`;
  }

  static getCookie(cookie: string) {
    const [ complex, module, feature ] = cookie.split('.');
    const cookieName = `${ complex }${ module }${ feature }`;
    const matches = document.cookie.match(
      new RegExp(
        '(?:^|; )' + cookieName.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'
      ));

    return matches ? decodeURIComponent(matches[1]) : '';
  }
}
