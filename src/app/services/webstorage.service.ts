import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { switchMap, mergeMap, catchError } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, throwError, of } from 'rxjs';
import { SessionToken } from '../infrastructure/model/sessionToken';

import { User } from '../infrastructure/model/user';
import { HttpService } from './http.service';
import { LoginDialogData } from '../infrastructure/interfaces/login-dialog-data-interface'

@Injectable()
export class WebStorageService {

  private _TOKEN_STORAGE_KEY = 'jwt_token';
  private _REMEMBER_ME_STORAGE_KEY = 'remember_me';
  private sessionToken: SessionToken = new SessionToken();
  user: User;

  constructor(@Inject(LOCAL_STORAGE) private localStorage: StorageService,
    @Inject(SESSION_STORAGE) private sessionStorage: StorageService,
    private httpService: HttpService) {
    this.user = new User();
  }

  public getUser(): Observable<User> {

    if (this.user.id !== 0) { return of(this.user); }

    if (this.sessionStorage.has(this._TOKEN_STORAGE_KEY)) {

      // Si el token está en sessionStorage sacarlo de ahí
      this.sessionToken = this.sessionStorage.get(this._TOKEN_STORAGE_KEY);
      return of(this.setUserFromToken(this.sessionToken.token));
    } else if (this.localStorage.has(this._TOKEN_STORAGE_KEY)) {

      // Sino buscar en localstorage
      this.sessionToken = this.localStorage.get(this._TOKEN_STORAGE_KEY);
      return of(this.setUserFromToken(this.sessionToken.token));
    } else {

      return of(this.user);
    }
  }

  public setUser(user: User, updateBackEnd?: boolean): Observable<User> {
    this.user = user;
    if (updateBackEnd != null && updateBackEnd) {
      return this.httpService.setUser(user).pipe(
        switchMap(us => {
          const fromT = us as User;
          this.user = new User(fromT.id, fromT.email, undefined, fromT.roles);
          return of(this.user);
        }));
    } else { return of(this.user); }
  }

  public registerUser(data: LoginDialogData): Observable<User> {

    this.saveRememberMe(data.rememberme);
    return this.httpService.registerUser(data).pipe(
      switchMap((response: any) => {
        this.user = this.setUserFromJWToken(response.token);
        return of(this.user);
      }));
  }

  public login(email: string, passwd: string, rememberme?: boolean): Observable<User> {

    this.saveRememberMe(rememberme!);
    return this.httpService.login(email, passwd).pipe(
      switchMap((response: any) => {
        this.user = this.setUserFromJWToken(response.token);
        return of(this.user);
      }));
  }

  public logout(): Observable<User> {

    this.clearSessionToken();
    this.localStorage.remove(this._REMEMBER_ME_STORAGE_KEY);
    this.user = new User();
    return of (this.user);
    // return this.httpService.logout().pipe(
    //   mergeMap(b => {
    //     this.user = new User();
    //     return of(this.user);
    //   }),
    //   catchError((e: any) => {
    //     this.user = new User();
    //     return of(this.user);
    //   })
    // );
  }

  /**************************** Private Methods ******************************/

  private setUserFromJWToken(token: string): User {
    this.sessionToken.jwtAuth = true;
    this.sessionToken.token = token;
    this.saveToken(this.sessionToken);
    return this.setUserFromToken(token);
  }

  private saveRememberMe(rememberme: boolean) {
    this.localStorage.set(this._REMEMBER_ME_STORAGE_KEY, rememberme);
  }

  private saveToken(sessionToken: SessionToken) {
    const storage = this.localStorage.get(this._REMEMBER_ME_STORAGE_KEY) === true ? this.localStorage : this.sessionStorage;
    storage.set(this._TOKEN_STORAGE_KEY, sessionToken);
  }

  private setUserFromToken(token: string): User {
    const helper = new JwtHelperService();
    const decoded = helper.decodeToken(token);
    if (decoded) this.user = new User(decoded.id, decoded.email, undefined, decoded.roles);
    return this.user;
  }

  public clearSessionToken() {
    this.sessionStorage.remove(this._TOKEN_STORAGE_KEY);
    this.localStorage.remove(this._TOKEN_STORAGE_KEY);
    this.sessionToken = new SessionToken();
  }

  public getSessionToken() {
    return this.sessionToken;
  }

  public checkOtherWindowLogin(): User {

    if (this.localStorage.has(this._TOKEN_STORAGE_KEY)) {
      this.sessionToken = this.localStorage.get(this._TOKEN_STORAGE_KEY);
      return this.setUserFromToken(this.sessionToken.token);
    }
    return new User();
  }

}
