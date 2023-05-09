import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';

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
}
