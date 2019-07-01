import { Injectable } from '@angular/core';
import { LoginPayload, LoginResponse } from './auth.config';
import { Observable, of } from 'rxjs';

const LoginMock: LoginResponse = {
  admin: true,
};

@Injectable()
export class AuthService {
  constructor() {}

  public login(payload: LoginPayload): Observable<LoginResponse> {
    return of(LoginMock);
  }
}
