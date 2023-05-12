import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';

import { RouterModule } from '@angular/router';
import { MainPageRoutingModule } from './main-page-routing.module';
import { TopicFormModule } from '../topic-form/topic-form.module';

import { FormsModule } from '@angular/forms';

import { TopicPageModule } from '../topic-page/topic-page.module';
import { TopicsMainComponent } from './topics-main/topics-main.component';

@NgModule({
  declarations: [MainPageComponent, TopicsMainComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedModule,
    MainPageRoutingModule,
    TopicPageModule,
    RouterModule,
    FormsModule,
    TopicFormModule,
  
  ],
  exports: [MainPageComponent],
})
export class MainPageModule {}
