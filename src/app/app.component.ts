import { Component, Optional } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';

import { User } from './infrastructure/model/user.model';
import { constants } from './app-constants';
import { LoginActions } from 'src/app/infrastructure/enums/login-actions-enum';
import { LoginDialogData } from 'src/app/infrastructure/interfaces/login-dialog-data-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'FrontEnd';
  user: User;

  constructor( private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer, 
                @Optional() public loginDialog: MatDialog) {
    this.user = new User();
    

    this.matIconRegistry.addSvgIcon('exit_to_app',
                                    this.domSanitizer.bypassSecurityTrustResourceUrl(constants.assetsUrl + 'exit_to_app-24px.svg'));
  }

  ngOnInit() {
  }

  onToggleLoginLogoutButton(): void {

    if (this.user.roles.length > 0) {
      
    } else {
      
      const data: LoginDialogData = {
        email: '',
        password: '', 
        action: LoginActions.Cancel, 
        rememberme: true,
        createUser: false
      };
      const dialogRef = this.loginDialog.open(LoginDialogComponent, {
        width: '350px',
        data: data});

      dialogRef.afterClosed().subscribe(result => {

      });
    }

  }
}
