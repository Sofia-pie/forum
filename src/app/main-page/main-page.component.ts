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

  questions = [
    {
      _id: 1,
      title:
        'Which of sci-fi’s favourite technologies would you like to see become a reality?',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue magna justo, volutpat, non amet massa viverra euismod id.',
      date: new Date('11-03-2023'),
      tags: 'technology',
      votes: 1,
    },
    {
      _id: 2,
      title: 'What was one of the most controversial inventions in history?',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue magna justo, volutpat, non amet massa viverra euismod id.',
      date: new Date('02-03-2023'),
      tags: 'technology',
      votes: 0,
    },
    {
      _id: 3,
      title: 'What was one of the most controversial inventions in history?',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue magna justo, volutpat, non amet massa viverra euismod id.',
      date: new Date('02-03-2023'),
      tags: 'technology',
      votes: 0,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
