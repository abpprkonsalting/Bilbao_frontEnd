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


import { HeaderComponent } from './components/header/header.component';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { FileListComponent } from './components/file-list/file-list.component';
import { WebStorageService } from './services/webstorage.service';
import { HttpService } from './services/http.service';
import { GlobalErrorHandler } from './services/global-error-handler';
import { ErrorDialogService } from './services/error-dialog.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginDialogComponent,
    ErrorDialogComponent,
    FileListComponent
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
    MatTooltipModule
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
