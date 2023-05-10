import { Injectable } from '@angular/core';
import { Topic } from '../models/topic';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TopicService {
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  private baseUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  // getTopics(): Observable<Topic[]> {
   
  // }

  addTopic(topic: any){
    return this.http.post(`${this.baseUrl}/topics`,topic,{headers:this.headers});
  }
  // getTopicById(id: string): Observable<Topic> {
  //   // return of(this.questions.find((question) => question._id === id)!);
  // }
}
