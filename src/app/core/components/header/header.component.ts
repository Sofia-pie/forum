import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faSearch,
  faUser,
  faCaretDown,
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
  showMenu = false;
  search = '';
  user: User;
  constructor(public router: Router, public userService: UserService) {
    if (this.userService.token) {
      this.userService.getCurrentUser().subscribe(res=>{this.user=res
      console.log(res)});
    }

  }

  ngOnInit(): void {
  
  }

  onDropdownClick() {
    console.log('click');
    this.showMenu = !this.showMenu;
  }

  onEnter($event: any) {
    console.log($event.target.value);
  }

  onLogout() {
    this.userService.logout();
  }
}
