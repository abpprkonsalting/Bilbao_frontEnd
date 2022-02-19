import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap, map } from 'rxjs/operators';
import { constants } from '../app-constants';

import { User } from '../infrastructure/model/user.model';


@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  public login(username: string, password: string) {
    return this.http.post<string>(constants.apiUrl + 'login',
      { email: username, password: password },
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' })});
  }

  public registerUser(user: User) {
    return this.http.post<string>(constants.apiUrl + 'register',
      { email: user.email, password: user.password },
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }

  public logout() {
    return this.http.post<string>(constants.apiUrl + 'logout', {}, {})
      .pipe(
        map((body: any) => body),
        catchError((e: any) => throwError(() => new Error(e))))
  }

  public setUser(user: User) {

    return this.http.post<string>(
      constants.baseUrl + 'user/update', user, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
      .pipe(
        map((body: any) => body as User),
        catchError((e: any) => throwError(() => new Error(e)))
      );
  }

}
