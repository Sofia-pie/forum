import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './user-page.component';
import { userPageRoutingModule } from './user-page-routing.module';
import { RouterModule } from '@angular/router';
import { UserCommentsComponent } from './user-comments/user-comments.component';
import { UserTopicsComponent } from './user-topics/user-topics.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [UserPageComponent, UserCommentsComponent, UserTopicsComponent],
  imports: [CommonModule, SharedModule, userPageRoutingModule, RouterModule],
})
export class UserPageModule {}
