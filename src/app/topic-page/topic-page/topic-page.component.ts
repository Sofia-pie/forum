import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  faArrowDown,
  faArrowRight,
  faArrowUp,
  faComment,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { TopicService } from '../../core/services/topic.service';
import { Topic } from '../../core/models/topic';
import { CommentsService } from '../../core/services/comments.service';
import { Comment } from '../../core/models/comments';

@Component({
  selector: 'app-topic-page',
  templateUrl: './topic-page.component.html',
  styleUrls: ['./topic-page.component.css'],
})
export class TopicPageComponent implements OnInit {
  faUp = faArrowUp;
  faDown = faArrowDown;
  faUser = faUser;
  faRight = faArrowRight;
  topic: Topic;
  comments: Comment[];
  comment: String;
  constructor(
    private route: ActivatedRoute,
    private topicService: TopicService,
    private commentsService: CommentsService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.topicService.getTopicById(Number(id)).subscribe((topic) => {
      this.topic = topic;
    });
    this.commentsService
      .getCommentsByTopicId(id!)
      .subscribe((c) => (this.comments = c));
  }

  addComment() {
    console.log(this.comment);
  }

  onCommentUpvote(comment: any) {
    this.commentsService
      .updateCommentUpvotes(comment._id, comment.upvotes)
      .subscribe();
  }

  onCommentDownvote(comment: any) {
    this.commentsService
      .updateCommentUpvotes(comment._id, comment.upvotes)
      .subscribe((c) => console.log(this.comments));
  }
}
