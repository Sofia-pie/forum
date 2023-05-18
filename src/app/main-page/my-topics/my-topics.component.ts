import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { Topic } from '../../core/models/topic';

@Component({
  selector: 'app-my-topics',
  templateUrl: './my-topics.component.html',
  styleUrls: ['./my-topics.component.css'],
})
export class MyTopicsComponent implements OnInit {
  topics: Topic[];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService
      .getUserTopics(this.userService.currentUserId!)
      .subscribe((res) => (this.topics = res));
  }
}
