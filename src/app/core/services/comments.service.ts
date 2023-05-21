import { Injectable } from '@angular/core';
import { Comment } from '../models/comments';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  private baseUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  createComment(topicId: string, text: string): Observable<Comment> {
    console.log(topicId);
    return this.http.post<Comment>(
      `${this.baseUrl}/topics/${topicId}/comments`,
      { text },
      { headers: this.headers }
    );
  }

  deleteComment(id: string) {
    return this.http.delete(`${this.baseUrl}/comments/${id}`);
  }
}
