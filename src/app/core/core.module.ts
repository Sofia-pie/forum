import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../core/components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { StatusMessageComponent } from './components/status-message/status-message.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, StatusMessageComponent],
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
