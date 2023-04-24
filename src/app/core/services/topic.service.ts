import { Injectable } from '@angular/core';
import { Topic } from '../models/topic';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TopicService {
  private questions: Topic[] = [
    {
      _id: 1,
      user_id: 1,
      tags: ['question'],
      upvotes: 4,
      title: 'How to use Angular?',
      content:
        'I am new to Angular and want to learn it. Can anyone give me some tips?',
    },
    {
      _id: 2,
      user_id: 2,
      tags: ['question'],
      upvotes: 4,
      title: 'What is the best way to learn programming?',
      content:
        "I want to become a programmer, but I don't know where to start. What should I do?",
    },
    {
      _id: 3,
      user_id: 1,
      tags: ['question'],
      upvotes: 2,

      title: 'How to become a successful software engineer?',
      content:
        'What are the key skills and traits that I need to become a successful software engineer?',
    },
  ];

  constructor() {}

  geTopics(): Observable<Topic[]> {
    return of(this.questions);
  }

  getQuestionById(id: number): Observable<Topic> {
    return of(this.questions.find((question) => question._id === id)!);
  }
}
