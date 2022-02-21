import { Component, OnInit, Input, Output, EventEmitter, ViewChild, Renderer2 } from '@angular/core';
import { constants } from '../../app-constants';
import {MatToolbar} from '@angular/material/toolbar';

import { User } from '../../infrastructure/model/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  @ViewChild(MatToolbar, {static: true}) toolbar!: MatToolbar;
  @Output() toggleLoginLogout = new EventEmitter<boolean>();
  @Input() user: User;
  logoUrl: string;
  private renderer: Renderer2;
  inter: number;

  constructor( renderer: Renderer2) {
    this.user = new User();
    this.logoUrl = constants.assetsUrl + 'logo.png';
    this.renderer = renderer;
    this.inter = 0;
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    window.setTimeout((that: any) => {
      that.renderer.addClass(that.toolbar._elementRef.nativeElement, 'is-hidden');
    }, 5000, this);
  }

  loginLogout() {
    this.toggleLoginLogout.emit(true);
  }

  mouseDown($event: MouseEvent) {
    if (this.toolbar._elementRef.nativeElement.classList.contains('is-hidden')) {

      this.renderer.removeClass(this.toolbar._elementRef.nativeElement, 'is-hidden');
      this.inter = window.setInterval((that: any) => {
        that.renderer.addClass(that.toolbar._elementRef.nativeElement, 'is-hidden');
        window.clearInterval(that.inter);
      }, 5000, this);
    }
  }
}
