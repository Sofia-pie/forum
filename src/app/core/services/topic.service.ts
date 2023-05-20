import { Injectable } from '@angular/core';
import { Topic } from '../models/topic';
import { Observable, catchError, of, tap, throwError } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Tag } from '../models/tag';

@Injectable({
  providedIn: 'root',
})
export class TopicService {
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  private baseUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  getTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>(`${this.baseUrl}/topics`);
  }

  addTopic(topic: any) {
    return this.http.post(`${this.baseUrl}/topics`, topic).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => 'Помилка');
      })
    );
  }

  editTopic(id: string, topic: any) {
    return this.http.put(`${this.baseUrl}/topics/${id}`, topic).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => 'Помилка');
      })
    );
  }

  getTopicById(id: string): Observable<Topic> {
    return this.http.get<Topic>(`${this.baseUrl}/topics/${id}`).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => 'Помилка');
      })
    );
  }

  deleteTopic(id: string) {
    return this.http.delete(`${this.baseUrl}/topics/${id}`).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => 'Помилка');
      })
    );
  }

  getTopicsByTag(id: string): Observable<Topic[]> {
    return this.http.get<Topic[]>(`${this.baseUrl}/topics/tags/${id}`);
  }
}
