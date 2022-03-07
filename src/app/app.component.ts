import { Component, Optional } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';
import { Observable } from 'rxjs';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

import { User } from './infrastructure/model/user';
import { constants } from './app-constants';
import { LoginAction } from 'src/app/infrastructure/enums/login-action';
import { LoginDialogData } from 'src/app/infrastructure/interfaces/login-dialog-data-interface';
import { WebStorageService } from './services/webstorage.service';
import { ObjectsStoreService } from './services/objects-store.service';
import { BusinessOportunity } from './infrastructure/model/business-oportunity';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'BilbaoDemo';
  user: User;
  dropListArray: string[] = ['list-0'];
  dropListCount: number = 1;

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer,
    @Optional() public loginDialog: MatDialog, private webStorageService: WebStorageService,
    private objectStore: ObjectsStoreService) {

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
        //console.log(this.user);
        this.objectStore.loadCompanies()
        this.objectStore.loadCurrencies()
        this.objectStore.loadDeliveryConditions()
        this.objectStore.loadMaterials()
        this.objectStore.loadPaymentMethods()
        this.objectStore.loadRejectedReasons()
        this.objectStore.loadUnits
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
        action: LoginAction.Cancel,
        rememberme: true,
        createUser: false,
        superAdmin: false,
        superAdminPassword: ""
      };
      const dialogRef = this.loginDialog.open(LoginDialogComponent, {
        width: '350px',
        data: data
      });

      dialogRef.afterClosed().subscribe(data => {
        if (data.action == LoginAction.Email) {
          if (data.createUser == true) {
            this.webStorageService.registerUser(data).subscribe(
              (user: User) => this.user = user);
          }
          else {
            this.webStorageService.login(data.email, data.password,data.rememberme).subscribe(
              (user: User) => this.user = user);
          }
        }
      });
    }
  }

  onDropItem($event: CdkDragDrop<BusinessOportunity[]>) {
    if ($event.item.data.type == undefined) {
      this.dropListArray.unshift("list-" + this.dropListCount)
      this.dropListCount++;
    }
  }
}
