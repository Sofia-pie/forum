import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, of, tap } from 'rxjs';

import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = `${environment.apiUrl}`;
  constructor(private http: HttpClient, public router: Router) {}

  registerUser(data: any): Observable<any> {
    let formData: any = new FormData();

    for (let i in data) {
      formData.append(i, data[i]);
    }
    return this.http.post(`${this.baseUrl}/auth/register`, formData);
  }

  loginUser(email: string, password: string): Observable<any> {
    return this.http
      .post<any>(`${this.baseUrl}/auth/login`, { email, password })
      .pipe(
        tap((res: any) => {
          localStorage.setItem('access_token', res.jwt_token);
        })
      );
  }

  get token(): string | undefined {
    if (localStorage.getItem('access_token')) {
      return localStorage.getItem('access_token')!;
    }
    return;
  }

  logout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['sign-up']);
    }
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }
}
