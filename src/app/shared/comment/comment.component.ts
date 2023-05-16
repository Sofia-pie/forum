import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comment } from '../../core/models/comments';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { CommentsService } from '../../core/services/comments.service';
import { environment } from '../../../environments/environment';
import { UserService } from '../../core/services/user.service';
import { Router } from '@angular/router';
import { UpvoteService } from '../../core/services/upvote.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  faUp = faArrowUp;
  faDown = faArrowDown;

  @Input() comment: Comment;

  @Output() onUpvote: EventEmitter<{}> = new EventEmitter();
  @Output() onDownvote: EventEmitter<{}> = new EventEmitter();

  profilePicture: string;
  isUpvoted: boolean = false;
  isDownvoted: boolean = false;

  constructor(
    private commentsService: CommentsService,
    private userService: UserService,
    private router: Router,
    private upvoteService: UpvoteService
  ) {}

  ngOnInit(): void {
    this.isUpvoted = this.comment.upvoters.includes(
      this.userService.currentUserId!
    );
    this.isDownvoted = this.comment.downvoters.includes(
      this.userService.currentUserId!
    );

    this.profilePicture = this.comment.user_id.profilePicture!;
  }
  onUpvoteClick() {
    if (!this.userService.isLoggedIn) {
      this.router.navigate(['/sign-in']);
    }
    this.isDownvoted = false;
    this.isUpvoted = !this.isUpvoted;
    this.upvoteService
      .upvoteItem(this.comment._id, this.isUpvoted, 'comment')
      .subscribe((res) => {
        this.comment.upvotes = res.upvotes;
      });
  }
  onDownvoteClick() {
    if (!this.userService.isLoggedIn) {
      this.router.navigate(['/sign-in']);
    }
    this.isUpvoted = false;
    this.isDownvoted = !this.isDownvoted;
    console.log(this.isDownvoted);
    this.upvoteService
      .downvoteItem(this.comment._id, this.isDownvoted, 'comment')
      .subscribe((res) => {
        this.comment.upvotes = res.upvotes;
      });
  }
}
