import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { tap } from 'rxjs/operators';
import { Common } from '../models/common';

@Injectable({
  providedIn: 'root',
})
export class UpvoteService {
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  private baseUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  upvoteItem(id: string, upvote: boolean, type: string) {
    const action = upvote ? 'add' : 'remove';
    return this.http
      .put<Common>(
        `${this.baseUrl}/upvote/${id}`,
        { action, type },
        { headers: this.headers }
      )
      .pipe(tap((res) => console.log(res)));
  }

  downvoteItem(id: string, downvote: boolean, type: string) {
    const action = downvote ? 'add' : 'remove';
    return this.http
      .put<Common>(
        `${this.baseUrl}/downvote/${id}`,
        { action, type },
        { headers: this.headers }
      )
      .pipe(tap((res) => console.log(res)));
  }
}
