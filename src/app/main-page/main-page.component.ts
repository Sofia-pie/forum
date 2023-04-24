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

  topics: Topic[];

  constructor(private topicService: TopicService) {}

  ngOnInit(): void {
    this.topicService.geTopics().subscribe((t) => (this.topics = t));
  }
}
