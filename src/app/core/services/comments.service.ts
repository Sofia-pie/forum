import { Injectable } from '@angular/core';
import { Comment } from '../models/comments';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  private comments: Comment[] = [
    {
      _id: 1,
      user_id: 1,
      topic_id: 1,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      created_date: new Date(),
      upvotes: 1,
    },
    {
      _id: 2,
      user_id: 2,
      topic_id: 1,
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      created_date: new Date(),
      upvotes: 0,
    },
  ];

  constructor() {}

  getCommentsByTopicId(topicId: string | number): Observable<Comment[]> {
    const comments = this.comments.filter(
      (c) => c.topic_id === Number(topicId)
    );
    return of(comments);
  }
}
