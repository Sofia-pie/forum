import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicPageComponent } from './topic-page/topic-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  declarations: [TopicPageComponent, CommentComponent],
  imports: [CommonModule, FontAwesomeModule, FormsModule],
  exports: [TopicPageComponent],
})
export class TopicPageModule {}
