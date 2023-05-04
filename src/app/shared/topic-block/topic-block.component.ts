import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  faArrowDown,
  faArrowRight,
  faArrowUp,
  faComment,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Topic } from '../../core/models/topic';

@Component({
  selector: 'app-topic-block',
  templateUrl: './topic-block.component.html',
  styleUrls: ['./topic-block.component.css'],
})
export class TopicBlockComponent implements OnInit {
  faUp = faArrowUp;
  faDown = faArrowDown;
  faComment = faComment;
  faUser = faUser;
  faRight = faArrowRight;

  showInput = false;

  comment: string;

  @Input() topic: Topic;
  @Input() showCommentButton: boolean;
  @Output() onUpvote = new EventEmitter();
  @Output() onDownvote = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  addComment() {
    console.log(this.comment);
  }

  onUpvoteClick() {
    const upvotes = this.topic.upvotes++;
    // this.comment.upvotes = upvotes;
    this.onUpvote.emit({ _id: this.topic._id, upvotes: upvotes });
  }
  onDownvoteClick() {
    const upvotes = this.topic.upvotes--;
    this.onDownvote.emit({ _id: this.topic._id, upvotes: upvotes });
  }
}
