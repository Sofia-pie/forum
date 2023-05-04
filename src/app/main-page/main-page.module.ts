import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';

import { RouterModule } from '@angular/router';
import { MainPageRoutingModule } from './main-page-routing.module';
import { TopicFormModule } from '../topic-form/topic-form.module';

import { FormsModule } from '@angular/forms';
import { TopicsListComponent } from './topics-list/topics-list.component';
import { TopicPageModule } from '../topic-page/topic-page.module';

@NgModule({
  declarations: [MainPageComponent, TopicsListComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedModule,
    MainPageRoutingModule,
    RouterModule,
    FormsModule,
    TopicFormModule,
    TopicPageModule,
  ],
  exports: [MainPageComponent],
})
export class MainPageModule {}
