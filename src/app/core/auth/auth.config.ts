export interface AuthState {
  readonly authenticated: boolean;
  readonly admin: boolean;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  admin: boolean;
}
