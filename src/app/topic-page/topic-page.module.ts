import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { TopicPageComponent } from './topic-page.component';

@NgModule({
  declarations: [TopicPageComponent],
  imports: [CommonModule, FontAwesomeModule, FormsModule, SharedModule],
  exports: [TopicPageComponent],
})
export class TopicPageModule {}
