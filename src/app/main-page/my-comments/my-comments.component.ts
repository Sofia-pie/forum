import { Component, OnInit } from '@angular/core';
import { Comment } from '../../core/models/comments';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-my-comments',
  templateUrl: './my-comments.component.html',
  styleUrls: ['./my-comments.component.css'],
})
export class MyCommentsComponent implements OnInit {
  comments: Comment[];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService
      .getUserComments(this.userService.currentUserId!)
      .subscribe((res) => (this.comments = res));
  }
}
