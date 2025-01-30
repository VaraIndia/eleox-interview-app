import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'https://eleox-interview-api-7n5su.ondigitalocean.app/login';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    console.log("Sending login request with:", { username, password });
    return this.http.post<any>(this.loginUrl, { username, password });
  }

  saveToken(token: string) {
    localStorage.setItem('auth_token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout() {
    localStorage.removeItem('auth_token');
  }

}
