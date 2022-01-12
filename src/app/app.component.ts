import { Component, Optional } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';
import { Observable, throwError, of, Observer } from 'rxjs';

import { User } from './infrastructure/model/user.model';
import { constants } from './app-constants';
import { LoginActions } from 'src/app/infrastructure/enums/login-actions-enum';
import { LoginDialogData } from 'src/app/infrastructure/interfaces/login-dialog-data-interface';
import { WebStorageService } from './services/webstorage.service';
//import { ObserversModule } from '@angular/cdk/observers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'FrontEnd';
  user: User;

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer,
    @Optional() public loginDialog: MatDialog, private webStorageService: WebStorageService) {

    this.user = new User();

    this.matIconRegistry.addSvgIcon('exit_to_app',
      this.domSanitizer.bypassSecurityTrustResourceUrl(constants.assetsUrl + 'exit_to_app-24px.svg'));
    this.matIconRegistry.addSvgIcon('add',
      this.domSanitizer.bypassSecurityTrustResourceUrl(constants.assetsUrl + 'add_plus_icon.svg'));
    this.matIconRegistry.addSvgIcon('download',
      this.domSanitizer.bypassSecurityTrustResourceUrl(constants.assetsUrl + 'download.svg'));


  }

  ngOnInit() {
    this.webStorageService.getUser().subscribe(
      (user: User) => {
        this.user = user;
        console.log(this.user);
      }
    );
  }

  onToggleLoginLogoutButton(): void {

    if (this.user.id !== 0) {

      this.webStorageService.logout().subscribe((user: User) => this.user = user);

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
        data: data
      });

      dialogRef.afterClosed().subscribe(data => {
        if (data.createUser == true) {
          this.webStorageService.registerUser(new User(0,data.email,data.password),data.rememberme).subscribe(
            (user: User) => this.user = user);
        }
        else {
          this.webStorageService.login(data.email, data.password,data.rememberme).subscribe(
            (user: User) => this.user = user);
        }
      });
    }
  }
}
