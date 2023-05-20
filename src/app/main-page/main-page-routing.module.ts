import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './main-page.component';
import { TopicFormComponent } from '../topic-form/topic-form.component';

import { AuthGuardService } from '../core/guards/auth-guard.service';
import { TopicsMainComponent } from './topics-main/topics-main.component';
import { MyTopicsComponent } from './my-topics/my-topics.component';
import { MyCommentsComponent } from './my-comments/my-comments.component';
import { TopicPageComponent } from '../topic-page/topic-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: 'topic/:id',
        component: TopicPageComponent,
      },
      {
        path: 'user/:id',
        loadChildren: () =>
          import('../user-page/user-page.module').then((m) => m.UserPageModule),
      },
      {
        path: 'my-topics',
        component: MyTopicsComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'my-comments',
        component: MyCommentsComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'tags/:id',
        component: TopicsMainComponent,
        data: { category: 'tag' },
      },
      {
        path: 'search',
        component: TopicsMainComponent,
        data: { category: 'search' },
      },
      {
        path: '',
        component: TopicsMainComponent,
        pathMatch: 'full',
        data: { category: 'all' },
      },
    ],
  },
  {
    path: 'new-topic',
    canActivate: [AuthGuardService],
    component: TopicFormComponent,
  },
  {
    path: 'new-topic/:id',
    canActivate: [AuthGuardService],
    component: TopicFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
