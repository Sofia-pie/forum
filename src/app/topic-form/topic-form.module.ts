import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicFormComponent } from './topic-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [TopicFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    RouterLink,
  ],
  exports: [TopicFormComponent],
})
export class TopicFormModule {}
