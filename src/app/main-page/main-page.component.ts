import { Component, OnInit } from '@angular/core';
import {
  faArrowLeft,
  faComments,
  faCompass,
  faHome,
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
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  faArrow = faArrowLeft;
  faPersonalQuestion = faQuestion;
  faHome = faHome;
  faAnswers = faComments;
  faLikes = faThumbsUp;
  faAdd = faPlus;

  user: User;
  topics: Topic[];

  constructor(
    private topicService: TopicService,
    private userService: UserService,
    private location: Location,
    public router: Router
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

  goBack() {
    this.location.back();
  }
}
