import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [
    {
      _id: 1,
      username: 'johndoe',
      email: 'johndoe@example.com',
      password: 'password',
      firstName: 'John',
      lastName: 'Doe',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      profilePictureUrl: 'https://via.placeholder.com/150',
    },
    {
      _id: 2,
      username: 'janedoe',
      email: 'janedoe@example.com',
      password: 'password',
      firstName: 'Jane',
      lastName: 'Doe',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      profilePictureUrl: 'https://via.placeholder.com/150',
    },
  ];
  constructor() {}

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  getUserById(id: number): Observable<User> {
    const user = this.users.find((u) => u._id === id);
    return of(user!);
  }
}
