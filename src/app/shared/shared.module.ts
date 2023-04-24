import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TopicBlockComponent } from './topic-block/topic-block.component';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [TopicBlockComponent],
  imports: [CommonModule, FontAwesomeModule, FormsModule, RouterLink],
  exports: [TopicBlockComponent],
})
export class SharedModule {}
