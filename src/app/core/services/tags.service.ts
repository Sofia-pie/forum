import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tag } from '../models/tag';

@Injectable({
  providedIn: 'root',
})
export class TagsService {
  tags = [
    { _id: 1, name: 'disqussion' },
    { _id: 2, name: 'question' },
  ];
  constructor() {}

  getTags(): Observable<string[]> {
    return of(this.tags.map((tag) => tag.name));
  }
  addTag(name: string) {
    this.tags.push({ _id: 3, name });
  }
}
