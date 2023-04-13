import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { QuestionBlockComponent } from './question-block/question-block.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [QuestionBlockComponent],
  imports: [CommonModule, FontAwesomeModule, FormsModule],
  exports: [QuestionBlockComponent],
})
export class SharedModule {}
