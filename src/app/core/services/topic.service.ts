import { Injectable } from '@angular/core';
import { Topic } from '../models/topic';
import { Observable, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    return this.http.post(`${this.baseUrl}/topics`, topic, {
      headers: this.headers,
    });
  }

  editTopic(id: string, topic: any) {
    return this.http.put(`${this.baseUrl}/topics/${id}`, topic);
  }

  getTopicById(id: string): Observable<Topic> {
    return this.http.get<Topic>(`${this.baseUrl}/topics/${id}`);
  }

  deleteTopic(id: string) {
    return this.http.delete(`${this.baseUrl}/topics/${id}`);
  }

  getTopicsByTag(id: string): Observable<Topic[]> {
    return this.http.get<Topic[]>(`${this.baseUrl}/topics/tags/${id}`);
  }
}
