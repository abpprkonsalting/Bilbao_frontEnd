import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of, catchError, mergeMap } from 'rxjs';
import { List } from 'immutable';
import { find } from 'rxjs';

import { HttpService } from './http.service';

import { Company } from '../infrastructure/model/company';

@Injectable({
  providedIn: 'root'
})
export class ObjectsStoreService {

  private _companies: BehaviorSubject<List<Company>> = new BehaviorSubject(List(Array<Company>()));

  constructor(private httpService: HttpService) { }

  get companies() {
    return this._companies.asObservable();
  }

  loadCompanies() {
    this.httpService.getCompanies().subscribe(
      (companies: Array<Company>) => {
        this._companies.next(List(companies));
      })
  }

  getCompanyByName(name: string): Company | undefined {
    return this._companies.getValue().find(cmp => cmp.name == name)
  }

  addCompany(company: Company): Observable<Company> {

    if (this._companies.getValue().some((cmp: Company) => {
      return cmp.name == company.name
    })) {
      throw new Error("That company already exists");
    }
    this._companies.next(this._companies.getValue().push(company));
    return of(company);
  }
}
