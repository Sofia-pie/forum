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
  comment: string;
  constructor(
    private route: ActivatedRoute,
    private topicService: TopicService,
    private commentsService: CommentsService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.topicService.getTopicById(id!).subscribe((topic) => {
      this.topic = topic;
      this.comments = topic.comments.sort((a, b) => b.upvotes - a.upvotes);
    });
  }

  addComment() {
    this.commentsService
      .createComment(this.topic._id, this.comment)
      .subscribe((res) => {
        console.log(res);
        this.comments.push(res);
      });
  }
}
