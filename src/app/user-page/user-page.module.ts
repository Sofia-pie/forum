import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './user-page.component';
import { userPageRoutingModule } from './user-page-routing.module';
import { RouterModule } from '@angular/router';
import { UserCommentsComponent } from './user-comments/user-comments.component';
import { UserTopicsComponent } from './user-topics/user-topics.component';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserPageComponent,
    UserCommentsComponent,
    UserTopicsComponent,
    EditUserComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    userPageRoutingModule,
    RouterModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
})
export class UserPageModule {}
