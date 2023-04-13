import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-suggest-users',
  templateUrl: './suggest-users.component.html',
  styleUrls: ['./suggest-users.component.css'],
})
export class SuggestUsersComponent implements OnInit {
  faAdd = faPlus;

  suggestions = [
    {
      name: 'user1',
      id: 1,
    },
    {
      name: 'user3',
      id: 3,
    },
    {
      name: 'user2',
      id: 2,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
