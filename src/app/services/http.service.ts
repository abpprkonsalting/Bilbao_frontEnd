import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry, tap, map } from 'rxjs/operators';
import { constants } from '../app-constants';
import { environment } from 'src/environments/environment';

import { User } from '../infrastructure/model/user';
import { LoginDialogData } from '../infrastructure/interfaces/login-dialog-data-interface';
import { Company } from '../infrastructure/model/company';


@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  public login(username: string, password: string) {
    return this.http.post<string>(constants.apiUrl + 'login',
      { email: username, password: password },
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' })});
  }

  public registerUser(data: LoginDialogData) {
    let user = new User(0,data.email,data.password);
    return this.http.post<string>(constants.apiUrl + 'register',
      { user: user, superAdminPassword: data.superAdminPassword },
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

  public getCompanies(): Observable<Company[]> {

    if (environment.local == true) {
      return of(constants.companies);
    }
    return of([new Company()]);
  }

}
