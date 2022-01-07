import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { constants } from '../../app-constants';

import { User } from '../../infrastructure/model/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  @Output() toggleLoginLogout = new EventEmitter<boolean>();
  @Input() user: User;
  logoUrl: string;

  constructor() {
    this.user = new User();
    this.logoUrl = constants.assetsUrl + 'logo.png';
  }
   
  ngOnInit(): void {
    
  }

  buttonPress() {
    //this.toggleNav.emit(true);
  }

  loginLogout() {
    this.toggleLoginLogout.emit(true);
  }
}
