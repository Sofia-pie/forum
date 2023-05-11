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

  addTopic(topic: any){
    return this.http.post(`${this.baseUrl}/topics`,topic,{headers:this.headers});
  }

  upvoteTopic(id:string,upvote:boolean){
    const action = upvote? 'add':'remove';
    return this.http.put<Topic>(`${this.baseUrl}/topics/${id}/upvote`,{action},{headers:this.headers}).pipe(tap((res)=>console.log(res)));
  }

  downvoteTopic(id:string,downvote:boolean){
    const action = downvote? 'add':'remove';
    return this.http.put<Topic>(`${this.baseUrl}/topics/${id}/downvote`,{action},{headers:this.headers}).pipe(tap((res)=>console.log(res)));
  }
  getTopicById(id: string): Observable<Topic> {
    return this.http.get<Topic>(`${this.baseUrl}/topics/${id}`);
  }
}
