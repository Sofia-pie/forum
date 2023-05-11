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
  isDownvoted: boolean =false;

  @Input() topic: Topic;
  @Input() showCommentButton: boolean;
  @Output() onUpvote = new EventEmitter();
  @Output() onDownvote = new EventEmitter();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.isUpvoted = this.topic.upvoters.includes(this.userService.userId!);
    this.isDownvoted = this.topic.downvoters.includes(this.userService.userId!);
  }

  addComment() {
    console.log(this.comment);
  }

  onUpvoteClick() {
    this.isDownvoted=false;
    this.isUpvoted= !this.isUpvoted;
    this.isUpvoted? this.topic.upvotes++ : this.topic.upvotes--;
    this.onUpvote.emit({id:this.topic._id, upvote:this.isUpvoted});
  }
  onDownvoteClick() {
    this.isUpvoted=false;
    this.isDownvoted= !this.isDownvoted;
    console.log(this.isDownvoted);
    this.isDownvoted? this.topic.upvotes-- : this.topic.upvotes++;
    this.onDownvote.emit({id:this.topic._id, downvote:this.isDownvoted});
  }
}
