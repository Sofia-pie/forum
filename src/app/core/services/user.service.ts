import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  public userId: string | null = null;
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  private baseUrl = `${environment.apiUrl}`;
  constructor(private http: HttpClient, public router: Router, private jwtHelper: JwtHelperService,) {}

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
          this.userId = res._id;
        })
      );
  }

  get token(): string | undefined {
    if (localStorage.getItem('access_token')) {
      return localStorage.getItem('access_token')!;
    }
    return;
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/user/${id}`, {
      headers: this.headers,
    });
  }
  getCurrentUser() {
    const jwtToken = this.token!;
    const decodedToken = this.jwtHelper.decodeToken(jwtToken);
    const id = decodedToken.user_id;
    let api = `${this.baseUrl}/user/${id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      tap((res: any) => {
        console.log(res);
      })
    );
  }
  logout() {
    let removeToken = localStorage.removeItem('access_token');
    this.userId = null;
    if (removeToken == null) {
      this.router.navigate(['sign-in']);
    }
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }
}
