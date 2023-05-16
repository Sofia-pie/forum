import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPageComponent } from './user-page.component';
import { UserTopicsComponent } from './user-topics/user-topics.component';
import { UserCommentsComponent } from './user-comments/user-comments.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  {
    path: '',
    component: UserPageComponent,
    children: [
      { path: 'comments', component: UserCommentsComponent },
      {
        path: 'topics',
        component: UserTopicsComponent,
      },
      { path: '', redirectTo: 'topics', pathMatch: 'full' },
    ],
  },
  { path: 'edit-user', component: EditUserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class userPageRoutingModule {}
