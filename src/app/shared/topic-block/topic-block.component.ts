import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  faArrowDown,
  faArrowRight,
  faArrowUp,
  faComment,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Topic } from '../../core/models/topic';
import { environment } from '../../../environments/environment';
import { UserService } from '../../core/services/user.service';
import { TopicService } from '../../core/services/topic.service';
import { Router } from '@angular/router';
import { UpvoteService } from '../../core/services/upvote.service';

@Component({
  selector: 'app-topic-block',
  templateUrl: './topic-block.component.html',
  styleUrls: ['./topic-block.component.css'],
})
export class TopicBlockComponent implements OnInit {
  url = environment.apiUrl;
  faUp = faArrowUp;
  faDown = faArrowDown;
  faComment = faComment;
  faUser = faUser;
  faRight = faArrowRight;

  showInput = false;

  comment: string;
  isUpvoted: boolean = false;
  isDownvoted: boolean = false;
  commentsCount: number;
  @Input() topic: Topic;
  @Input() showCommentButton: boolean;
  @Output() addComment = new EventEmitter();

  constructor(
    private userService: UserService,
    private topicService: TopicService,
    private router: Router,
    private upvoteService: UpvoteService
  ) {}

  ngOnInit(): void {
    this.isUpvoted = this.topic.upvoters.includes(this.userService.userId!);
    this.isDownvoted = this.topic.downvoters.includes(this.userService.userId!);
    this.commentsCount = this.topic.comments.length;
  }

  onaddCommentClick() {
    if (!this.userService.isLoggedIn) {
      this.router.navigate(['/sign-in']);
    }
    this.addComment.emit({ id: this.topic._id, comment: this.comment });
    this.commentsCount++;
  }
  onShowCommentInputClick() {
    if (!this.showCommentButton) return;
    this.showInput = !this.showInput;
  }
  onUpvoteClick() {
    if (!this.userService.isLoggedIn) {
      this.router.navigate(['/sign-in']);
    }
    this.isDownvoted = false;
    this.isUpvoted = !this.isUpvoted;
    this.upvoteService
      .upvoteItem(this.topic._id, this.isUpvoted, 'topic')
      .subscribe((res) => {
        this.topic.upvotes = res.upvotes;
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
      .downvoteItem(this.topic._id, this.isDownvoted, 'topic')
      .subscribe((res) => {
        this.topic.upvotes = res.upvotes;
      });
  }
}
