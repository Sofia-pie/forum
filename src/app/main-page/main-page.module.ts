import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';
import { SuggestUsersComponent } from './suggest-users/suggest-users.component';

@NgModule({
  declarations: [MainPageComponent, SuggestUsersComponent],
  imports: [CommonModule, FontAwesomeModule, SharedModule],
  exports: [MainPageComponent],
})
export class MainPageModule {}
