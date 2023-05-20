import { Injectable } from '@angular/core';
import { User } from '../models/user';
import {
  BehaviorSubject,
  Observable,
  catchError,
  of,
  subscribeOn,
  take,
  tap,
  throwError,
} from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

import { environment } from '../../../environments/environment';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Topic } from '../models/topic';
import { Comment } from '../models/comments';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  private baseUrl = `${environment.apiUrl}`;
  constructor(
    private http: HttpClient,
    public router: Router,
    private jwtHelper: JwtHelperService
  ) {}

  registerUser(data: any): Observable<any> {
    let formData: any = new FormData();
    for (let i in data) {
      formData.append(i, data[i]);
    }
    return this.http.post(`${this.baseUrl}/auth/register`, formData).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 400) {
          return throwError(
            () => 'Користувач із цією електронною адресою вже існує.'
          );
        }
        return throwError(() => 'Помилка при створенні користувача.');
      })
    );
  }

  loginUser(email: string, password: string): Observable<any> {
    return this.http
      .post<any>(`${this.baseUrl}/auth/login`, { email, password })
      .pipe(
        tap((res) => {
          localStorage.setItem('access_token', res.jwt_token);
        }),
        catchError((error: HttpErrorResponse) => {
          if (error.status === 400) {
            return throwError(() => 'Неправильна електронна адреса або пароль');
          }
          return throwError(() => 'Помилка');
        })
      );
  }

  editUserInfo(data: any) {
    const header = new HttpHeaders().set('Content-Type', 'multipart/form-data');
    let userData: any = new FormData();

    for (let i in data) {
      userData.append(i, data[i]);
    }

    return this.http.put<User>(`${this.baseUrl}/user`, userData).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => 'Помилка');
      })
    );
  }

  deleteCurrentUser() {
    return this.http
      .delete(`${this.baseUrl}/user`)
      .pipe(take(1))
      .subscribe((res) => {
        localStorage.removeItem('access_token');
        this.router.navigate(['sign-in']);
      });
  }
  get token(): string | undefined {
    if (localStorage.getItem('access_token')) {
      return localStorage.getItem('access_token')!;
    }
    return;
  }

  getUser(id: string): Observable<User> {
    return this.http
      .get<User>(`${this.baseUrl}/user/${id}`, {
        headers: this.headers,
      })
      .pipe(tap((res) => console.log(res)));
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

  getUserTopics(id: string): Observable<Topic[]> {
    return this.http.get<Topic[]>(`${this.baseUrl}/user/${id}/topics`);
  }

  getUserComments(id: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.baseUrl}/user/${id}/comments`);
  }

  logout() {
    let removeToken = localStorage.removeItem('access_token');

    if (removeToken == null) {
      this.router.navigate(['sign-in']);
    }
  }

  get currentUserId(): string | undefined {
    if (this.token) {
      const jwtToken = this.token;
      const decodedToken = this.jwtHelper.decodeToken(jwtToken);
      return decodedToken.user_id;
    }
    return;
  }
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }
}
