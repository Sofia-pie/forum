import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faSearch,
  faUser,
  faCaretDown,
  faCommentDots,
} from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  faSearch = faSearch;
  faUser = faUser;
  faTriangle = faCaretDown;
  faLogo = faCommentDots;
  showMenu = false;
  query = '';
  user: User | null;

  constructor(public router: Router, public userService: UserService) {}

  ngOnInit(): void {
    if (this.userService.token) {
      this.userService.getCurrentUser().subscribe((res) => {
        this.user = res;

        console.log(res);
      });
    }
  }

  onDropdownClick() {
    console.log('click');
    this.showMenu = !this.showMenu;
  }

  onEnter(event: any) {
    console.log(event.target.value);
    this.search(event.target.value);
  }

  search(query: string) {
    if (query === '') {
      this.router.navigate(['/main']);
      return;
    }
    this.router.navigate(['/main/search', { query: query }]);
  }

  onLogout() {
    this.user = null;
    this.userService.logout();
  }
}
