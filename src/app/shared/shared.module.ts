import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TopicBlockComponent } from './topic-block/topic-block.component';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { TopicsListComponent } from './topics-list/topics-list.component';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  declarations: [
    TopicBlockComponent,
    UploadImageComponent,
    TopicsListComponent,
    CommentComponent,
  ],
  imports: [CommonModule, FontAwesomeModule, FormsModule, RouterLink],
  exports: [
    TopicsListComponent,
    TopicBlockComponent,
    UploadImageComponent,
    CommentComponent,
  ],
})
export class SharedModule {}
