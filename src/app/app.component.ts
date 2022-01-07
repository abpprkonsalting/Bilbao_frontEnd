import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { User } from './infrastructure/model/user.model';
import { constants } from './app-constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'FrontEnd';
  user: User;

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.user = new User();
    this.matIconRegistry.addSvgIcon('exit_to_app',
                                    this.domSanitizer.bypassSecurityTrustResourceUrl(constants.assetsUrl + 'exit_to_app-24px.svg'));
  }
  ngOnInit() {
  }
}
