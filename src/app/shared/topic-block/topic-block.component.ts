import { Component, Input, OnInit } from '@angular/core';
import {
  faArrowDown,
  faArrowRight,
  faArrowUp,
  faComment,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

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

  @Input() topic: any;

  constructor() {}

  ngOnInit(): void {}

  addComment() {
    console.log(this.comment);
  }
}
