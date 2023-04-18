import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';
import { SuggestUsersComponent } from './suggest-users/suggest-users.component';
import { RouterModule } from '@angular/router';
import { MainPageRoutingModule } from './main-page-routing.module';

@NgModule({
  declarations: [MainPageComponent, SuggestUsersComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedModule,
    MainPageRoutingModule,
    RouterModule,
  ],
  exports: [MainPageComponent],
})
export class MainPageModule {}
