import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {
  environment
} from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // apiUrl = 'http://localhost:5000/api/v1/auth';
  private apiUrl = `${environment.apiUrl}/auth`;
  constructor(
    private http: HttpClient
  ) { }

  register(userData: any) {

    return this.http.post(
      `${this.apiUrl}/register`,
      userData
    );
  }

  login(loginData: any) {

    return this.http.post(
      `${this.apiUrl}/login`,
      loginData
    );
  }

  saveToken(token: string): void {

    if (typeof window !== 'undefined') {

      localStorage.setItem(
        'token',
        token
      );
    }
  }

  getToken(): string | null {

    if (typeof window !== 'undefined') {

      return localStorage.getItem(
        'token'
      );
    }

    return null;
  }
  logout(): void {

    if (typeof window !== 'undefined') {

      localStorage.removeItem(
        'token'
      );
    }
  }
  isLoggedIn(): boolean {

    return !!this.getToken();
  }
}