import { Injectable } from '@angular/core';
import { Comment } from '../models/comments';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {


  constructor() {}

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

}
