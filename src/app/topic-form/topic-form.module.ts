import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicFormComponent } from './topic-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TopicFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [TopicFormComponent],
})
export class TopicFormModule {}
