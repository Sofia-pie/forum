import { Component, OnInit } from '@angular/core';
import {
  faComments,
  faCompass,
  faPlus,
  faQuestion,
  faQuestionCircle,
  faTag,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import { Topic } from '../core/models/topic';
import { TopicService } from '../core/services/topic.service';
import { UserService } from '../core/services/user.service';
import { User } from '../core/models/user';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  faQuestion = faQuestionCircle;
  faTopics = faCompass;
  faTags = faTag;
  faPersonalQuestion = faQuestion;
  faAnswers = faComments;
  faLikes = faThumbsUp;
  faAdd = faPlus;

  user: User;
  topics: Topic[];

  constructor(
    private topicService: TopicService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    // this.topicService.geTopics().subscribe((t) => (this.topics = t));

    if (this.userService.token) {
      this.userService.getCurrentUser().subscribe((res) => {
        this.user = res;

        console.log(res);
      });
    }
  }
}
