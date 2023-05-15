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

//   updateCommentUpvotes(
//     commentId: string,
//     newUpvotes: number
//   ): Observable<Comment> {
//     const commentIndex = this.comments.findIndex((c) => c._id === commentId);
//     if (commentIndex === -1) {
//       throw new Error('Comment not found');
//     }
//     const comment = this.comments[commentIndex];
//     const updatedComment = { ...comment, upvotes: newUpvotes };
//     this.comments[commentIndex] = updatedComment;
//     return of(updatedComment);
//   }
//   getCommentsByTopicId(topicId: string): Observable<Comment[]> {
//     const comments = this.comments.filter((c) => c.topic_id === topicId);
//     return of(comments);
//   }

createComment(topicId: string,text: string):Observable<Comment>{
   return  this.http.post<Comment>(`${this.baseUrl}/topics/${topicId}/comments`,{text},{headers:this.headers})
}

}
