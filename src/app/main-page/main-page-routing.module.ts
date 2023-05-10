import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './main-page.component';
import { TopicFormComponent } from '../topic-form/topic-form.component';

import { TopicPageComponent } from '../topic-page/topic-page/topic-page.component';
import { AuthGuardService } from '../core/guards/auth-guard.service';

const routes: Routes = [
  
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
    canActivate:[AuthGuardService],
    component: TopicFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
