import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faSearch,
  faUser,
  faCaretDown,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  faSearch = faSearch;
  faUser = faUser;
  faTriangle = faCaretDown;
  showMenu = false;
  search = '';
  constructor(public router: Router) {}

  ngOnInit(): void {}

  onDropdownClick() {
    console.log('click');
    this.showMenu = !this.showMenu;
  }

  onEnter($event: any) {
    console.log($event.target.value);
  }
}
