import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card'
import { DragDropModule } from '@angular/cdk/drag-drop'
import { MatSelectModule } from '@angular/material/select'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';



import { HeaderComponent } from './components/header/header.component';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { OportunitiesListComponent } from './components/oportunities-list/oportunities-list.component';
import { WebStorageService } from './services/webstorage.service';
import { HttpService } from './services/http.service';
import { GlobalErrorHandler } from './services/global-error-handler';
import { ErrorDialogService } from './services/error-dialog.service';
import { OportunitiesPartsRepoComponent } from './components/oportunities-parts-repo/oportunities-parts-repo.component';
import { UserNotAdminPipe } from './infrastructure/pipes/user-not-admin.pipe';
import { OfferProgressPipe } from './infrastructure/pipes/offer-status-to-progress.pipe';
import { OfferActionPipe } from './infrastructure/pipes/offer-action.pipe';
import { OfferCloseDialogComponent } from './components/offer-close-dialog/offer-close-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginDialogComponent,
    ErrorDialogComponent,
    OportunitiesListComponent,
    OportunitiesPartsRepoComponent,
    UserNotAdminPipe,
    OfferProgressPipe,
    OfferActionPipe,
    OfferCloseDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    HttpClientModule,
    MatDialogModule,
    MatCheckboxModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatCardModule,
    DragDropModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonToggleModule
  ],
  providers: [
    WebStorageService,
    HttpService,
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
    ErrorDialogService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
