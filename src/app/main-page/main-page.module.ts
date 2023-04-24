import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';
import { SuggestUsersComponent } from './suggest-users/suggest-users.component';
import { RouterModule } from '@angular/router';
import { MainPageRoutingModule } from './main-page-routing.module';
import { TopicFormModule } from '../topic-form/topic-form.module';
import { TopicPageComponent } from './topic-page/topic-page.component';
import { FormsModule } from '@angular/forms';
import { TopicsListComponent } from './topics-list/topics-list.component';

@NgModule({
  declarations: [
    MainPageComponent,
    SuggestUsersComponent,
    TopicPageComponent,
    TopicsListComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedModule,
    MainPageRoutingModule,
    RouterModule,
    FormsModule,
    TopicFormModule,
  ],
  exports: [MainPageComponent],
})
export class MainPageModule {}
