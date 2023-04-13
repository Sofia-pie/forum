import { Component, Input, OnInit } from '@angular/core';
import {
  faArrowDown,
  faArrowRight,
  faArrowUp,
  faComment,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-question-block',
  templateUrl: './question-block.component.html',
  styleUrls: ['./question-block.component.css'],
})
export class QuestionBlockComponent implements OnInit {
  faUp = faArrowUp;
  faDown = faArrowDown;
  faComment = faComment;
  faUser = faUser;
  faRight = faArrowRight;

  showInput = false;

  comment: string;

  @Input() question: any;

  constructor() {}

  ngOnInit(): void {}

  addComment() {
    console.log(this.comment);
  }
}
