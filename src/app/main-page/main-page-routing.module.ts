import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './main-page.component';
import { TopicFormComponent } from '../topic-form/topic-form.component';

import { TopicPageComponent } from '../topic-page/topic-page/topic-page.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: MainPageComponent,
  //   pathMatch: 'full',
  // },
  // {
  //   path: '',
  //   component: QuestionsListComponent,
  //   pathMatch: 'full',
  // },
  // { path: 'new-topic', component: TopicFormComponent, outlet: 'main-page' },
  {
    path: '',
    component: MainPageComponent,
    pathMatch: 'full',
  },
  {
    path: 'topic/:id',
    component: TopicPageComponent,
  },
  {
    path: 'new-topic',
    component: TopicFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
