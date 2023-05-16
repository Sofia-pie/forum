import { Component, OnInit } from '@angular/core';
import { Topic } from '../../core/models/topic';
import { UserService } from '../../core/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-topics',
  templateUrl: './user-topics.component.html',
  styleUrls: ['./user-topics.component.css'],
})
export class UserTopicsComponent implements OnInit {
  topics: Topic[];
  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route
      .parent!.params.pipe(
        switchMap((params) => {
          const userId = params['id'];

          return this.userService.getUserTopics(userId);
        })
      )
      .subscribe((res) => (this.topics = res));
  }
}
