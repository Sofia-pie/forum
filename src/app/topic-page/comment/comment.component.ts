import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comment } from '../../core/models/comments';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { CommentsService } from '../../core/services/comments.service';

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
  constructor(private commentsService: CommentsService) {}

  ngOnInit(): void {}
  onUpvoteClick() {
    const upvotes = this.comment.upvotes++;
    // this.comment.upvotes = upvotes;
    this.onUpvote.emit({ _id: this.comment._id, upvotes: upvotes });
  }
  onDownvoteClick() {
    const upvotes = this.comment.upvotes--;
    this.onDownvote.emit({ _id: this.comment._id, upvotes: upvotes });
  }
}
