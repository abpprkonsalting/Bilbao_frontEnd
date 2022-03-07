import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of, catchError, mergeMap } from 'rxjs';
import { List } from 'immutable';
import { find } from 'rxjs';

import { HttpService } from './http.service';

import { Company } from '../infrastructure/model/company';
import { Currency } from '../infrastructure/model/currency';
import { DeliveryConditions } from '../infrastructure/model/delivery-conditions';
import { Material } from '../infrastructure/model/material';
import { PaymentMethod } from '../infrastructure/model/payment-method';
import { RejectedReason } from '../infrastructure/model/rejected-reason';
import { Unit } from '../infrastructure/model/unit';

@Injectable({
  providedIn: 'root'
})
export class ObjectsStoreService {

  private _companies: BehaviorSubject<List<Company>> = new BehaviorSubject(List(Array<Company>()));
  private _currencies: BehaviorSubject<List<Currency>> = new BehaviorSubject(List(Array<Currency>()));
  private _deliveryConditions: BehaviorSubject<List<DeliveryConditions>> = new BehaviorSubject(List(Array<DeliveryConditions>()));
  private _materials: BehaviorSubject<List<Material>> = new BehaviorSubject(List(Array<Material>()));
  private _paymentMethods: BehaviorSubject<List<PaymentMethod>> = new BehaviorSubject(List(Array<PaymentMethod>()));
  private _rejectedReasons: BehaviorSubject<List<RejectedReason>> = new BehaviorSubject(List(Array<RejectedReason>()));
  private _units: BehaviorSubject<List<Unit>> = new BehaviorSubject(List(Array<Unit>()));

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
  get currencies() {
    return this._currencies.asObservable();
  }

  loadCurrencies() {
    this.httpService.getCurrencies().subscribe(
      (currencies: Array<Currency>) => {
        this._currencies.next(List(currencies));
      })
  }

  getCurrencyByName(name: string): Currency | undefined {
    return this._currencies.getValue().find(cmp => cmp.name == name)
  }

  addCurrency(currency: Currency): Observable<Currency> {

    if (this._currencies.getValue().some((cmp: Currency) => {
      return cmp.name == currency.name
    })) {
      throw new Error("That currency already exists");
    }
    this._currencies.next(this._currencies.getValue().push(currency));
    return of(currency);
  }
  get deliveryConditions() {
    return this._deliveryConditions.asObservable();
  }

  loadDeliveryConditions() {
    this.httpService.getDeliveryConditions().subscribe(
      (deliveryConditions: Array<DeliveryConditions>) => {
        this._deliveryConditions.next(List(deliveryConditions));
      })
  }

  getDeliveryConditionsByName(name: string): DeliveryConditions | undefined {
    return this._deliveryConditions.getValue().find(cmp => cmp.name == name)
  }

  addDeliveryConditions(deliveryConditions: DeliveryConditions): Observable<DeliveryConditions> {

    if (this._deliveryConditions.getValue().some((cmp: DeliveryConditions) => {
      return cmp.name == deliveryConditions.name
    })) {
      throw new Error("That Delivery Condition already exists");
    }
    this._deliveryConditions.next(this._deliveryConditions.getValue().push(deliveryConditions));
    return of(deliveryConditions);
  }
  get materials() {
    return this._materials.asObservable();
  }

  loadMaterials() {
    this.httpService.getMaterials().subscribe(
      (materials: Array<Material>) => {
        this._materials.next(List(materials));
      })
  }

  getMaterialByName(name: string): Material | undefined {
    return this._materials.getValue().find(cmp => cmp.name == name)
  }

  addMaterial(material: Material): Observable<Material> {

    if (this._materials.getValue().some((cmp: Material) => {
      return cmp.name == material.name
    })) {
      throw new Error("That material already exists");
    }
    this._materials.next(this._materials.getValue().push(material));
    return of(material);
  }
  get paymentMethods() {
    return this._paymentMethods.asObservable();
  }

  loadPaymentMethods() {
    this.httpService.getPaymentMethods().subscribe(
      (paymentMethods: Array<PaymentMethod>) => {
        this._paymentMethods.next(List(paymentMethods));
      })
  }

  getPaymentMethodByName(name: string): PaymentMethod | undefined {
    return this._paymentMethods.getValue().find(cmp => cmp.name == name)
  }

  addPaymentMethod(paymentMethod: PaymentMethod): Observable<PaymentMethod> {

    if (this._paymentMethods.getValue().some((cmp: PaymentMethod) => {
      return cmp.name == paymentMethod.name
    })) {
      throw new Error("That paymentMethod already exists");
    }
    this._paymentMethods.next(this._paymentMethods.getValue().push(paymentMethod));
    return of(paymentMethod);
  }
  get rejectedReasons() {
    return this._rejectedReasons.asObservable();
  }

  loadRejectedReasons() {
    this.httpService.getRejectedReasons().subscribe(
      (rejectedReasons: Array<RejectedReason>) => {
        this._rejectedReasons.next(List(rejectedReasons));
      })
  }

  getRejectedReasonByName(name: string): RejectedReason | undefined {
    return this._rejectedReasons.getValue().find(cmp => cmp.name == name)
  }

  addRejectedReason(rejectedReason: RejectedReason): Observable<RejectedReason> {

    if (this._rejectedReasons.getValue().some((cmp: RejectedReason) => {
      return cmp.name == rejectedReason.name
    })) {
      throw new Error("That rejectedReason already exists");
    }
    this._rejectedReasons.next(this._rejectedReasons.getValue().push(rejectedReason));
    return of(rejectedReason);
  }
  get units() {
    return this._units.asObservable();
  }

  loadUnits() {
    this.httpService.getUnits().subscribe(
      (units: Array<Unit>) => {
        this._units.next(List(units));
      })
  }

  getUnitByName(name: string): Unit | undefined {
    return this._units.getValue().find(cmp => cmp.name == name)
  }

  addUnit(unit: Unit): Observable<Unit> {

    if (this._units.getValue().some((cmp: Unit) => {
      return cmp.name == unit.name
    })) {
      throw new Error("That unit already exists");
    }
    this._units.next(this._units.getValue().push(unit));
    return of(unit);
  }
  
}
