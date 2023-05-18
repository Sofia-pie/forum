import { Component, OnInit } from '@angular/core';
import { Comment } from '../../core/models/comments';
import { UserService } from '../../core/services/user.service';
import { CommentsService } from '../../core/services/comments.service';

@Component({
  selector: 'app-my-comments',
  templateUrl: './my-comments.component.html',
  styleUrls: ['./my-comments.component.css'],
})
export class MyCommentsComponent implements OnInit {
  comments: Comment[];
  constructor(
    private userService: UserService,
    private commentsService: CommentsService
  ) {}

  ngOnInit(): void {
    this.userService
      .getUserComments(this.userService.currentUserId!)
      .subscribe((res) => (this.comments = res));
  }

  deleteComment(id: string) {
    this.commentsService.deleteComment(id).subscribe((res) => {
      this.comments = this.comments.filter((c) => c._id !== id);
    });
  }
}
