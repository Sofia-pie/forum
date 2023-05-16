import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../core/models/user';
import { environment } from '../../environments/environment';
import { Topic } from '../core/models/topic';
import { Comment } from '../core/models/comments';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
})
export class UserPageComponent implements OnInit {
  pictureUrl: string;
  user: User;
  showTopics: boolean = true;
  showComments: boolean;
  topics: Topic[];
  comments: Comment[];

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.userService.getUser(id!).subscribe((res) => {
      this.user = res;
    });
  }

  onShowTopics() {}

  onShowComments() {}
}
