import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { Comment } from '../../core/models/comments';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-comments',
  templateUrl: './user-comments.component.html',
  styleUrls: ['./user-comments.component.css'],
})
export class UserCommentsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}
  comments: Comment[];
  userId: string;
  ngOnInit(): void {
    this.route
      .parent!.params.pipe(
        switchMap((params) => {
          this.userId = params['id'];

          return this.userService.getUserComments(this.userId);
        })
      )
      .subscribe((res) => {
        this.comments = res;
        console.log(this.comments[0]);
      });
  }
}
