import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { environment } from '../../../environments/environment';
import { map, tap } from 'rxjs/operators';

import { Tag } from '../models/tag';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TagsService {
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  private baseUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient,) {}

  getTags(): Observable<string[]> {
    return this.http.get<Tag[]>(`${this.baseUrl}/tags`).pipe(
    
      map(tags => tags.map(tag => tag.name))
    );
  }

}
