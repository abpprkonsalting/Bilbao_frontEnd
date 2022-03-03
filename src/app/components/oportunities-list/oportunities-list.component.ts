import { Component, OnInit, Input, Output, EventEmitter, Optional } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';

import { User } from 'src/app/infrastructure/model/user'
import { BusinessOportunity } from 'src/app/infrastructure/model/business-oportunity';
import { Request } from 'src/app/infrastructure/model/request'
import { Offer } from 'src/app/infrastructure/model/offer';
import { Contract } from 'src/app/infrastructure/model/contract';
import { OportunityPart } from 'src/app/infrastructure/model/oportunity-part';
import { ImporterCompany } from "../../infrastructure/enums/importer-company";
import { Material } from "../../infrastructure/enums/material"
import { FinalClient } from 'src/app/infrastructure/enums/final-client';
import { Unit } from 'src/app/infrastructure/enums/unit';
import { Currency } from 'src/app/infrastructure/enums/currency';
import { OStatus } from 'src/app/infrastructure/enums/offer-status';
import { PaymentMethod } from 'src/app/infrastructure/enums/payment-method';
import { OfferCloseDialogComponent } from '../offer-close-dialog/offer-close-dialog.component';
import { DeliveryConditions } from 'src/app/infrastructure/enums/delivery-conditions';

@Component({
  selector: 'oportunities-list',
  templateUrl: './oportunities-list.component.html',
  styleUrls: ['./oportunities-list.component.less']
})
export class OportunitiesListComponent implements OnInit {

  @Input() user: User;

  oportunities: BusinessOportunity[]
  public allDropListsIds: string[];

  importerCompanies = ImporterCompany;
  importerCompaniesKeys: any = [];

  requestedMaterials = Material;
  requestedMaterialKeys: any = []

  finalClients = FinalClient;
  finalClientsKeys: any = []

  units = Unit;
  unitsKeys: any = []

  offerStatuses = OStatus
  offerStatusKeys: any = []

  currencies = Currency;
  currenciesKeys: any = []

  paymentMethods = PaymentMethod
  paymentMethodsKeys: any = []

  deliveryConditions = DeliveryConditions
  deliveryConditionsKeys: any = []

  @Output() itemDrop: EventEmitter<CdkDragDrop<BusinessOportunity[]>>

  constructor( @Optional() public offerCloseDialog: MatDialog) {
    this.user = new User()
    this.importerCompaniesKeys = Object.keys(this.importerCompanies).filter(f => !isNaN(Number(f)));
    this.requestedMaterialKeys = Object.keys(this.requestedMaterials).filter(f => !isNaN(Number(f)));
    this.finalClientsKeys = Object.keys(this.finalClients).filter(f => !isNaN(Number(f)));
    this.unitsKeys = Object.keys(this.units).filter(f => !isNaN(Number(f)));
    this.currenciesKeys = Object.keys(this.currencies).filter(f => !isNaN(Number(f)));
    this.offerStatusKeys = Object.keys(this.offerStatuses).filter(f => !isNaN(Number(f)));
    this.paymentMethodsKeys = Object.keys(this.paymentMethods).filter(f => !isNaN(Number(f)));
    this.deliveryConditionsKeys = Object.keys(this.deliveryConditions).filter(f => !isNaN(Number(f)));
    this.oportunities = []
    this.allDropListsIds = [];
    this.itemDrop = new EventEmitter();
  }

  ngOnInit(): void {
  }

  afterPanelExpand(el: HTMLElement) {
    el.focus();
  }

  afterPanelCollapse(oportunity: any) {
    //console.log(file.name);
  }

  drop(event: CdkDragDrop<BusinessOportunity[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else if (event.item.data.type == undefined) {
      let newArray = [new BusinessOportunity()]
      transferArrayItem(
        newArray,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      this.itemDrop.emit(event);
    }
  }

  dropPart(event: CdkDragDrop<OportunityPart>, oportunity: BusinessOportunity) {
    if (event.item.data.type == "Offer" &&
      this.canOfferBeMade(oportunity)) {
      oportunity.offer = new Offer();
    }
    else if (event.item.data.type == "Contract" &&
      oportunity.offer != undefined &&
      this.canContractBeMade(oportunity)) {
      oportunity.contract = new Contract()
    }
  }

  canOfferBeMade(oportunity: BusinessOportunity): boolean {
    if (oportunity.offer == undefined &&
        this.getRequestProgress(oportunity.request) == 100) return true
    return false;
  }

  canContractBeMade(oportunity: BusinessOportunity): boolean {
    if (oportunity.contract == undefined && oportunity.offer != undefined &&
        oportunity.offer.status.status == OStatus.Accepted) return true
    return false
  }

  getRequestHeader(request: Request) {
    let returnValue = request.importerCompany != undefined ?
          this.importerCompanies[request.importerCompany] : 'UNDEFINED'
    returnValue += ' - '
    returnValue += request.requestedMaterial != undefined ?
          this.requestedMaterials[request.requestedMaterial] : 'UNDEFINED'
    returnValue += ' - '
    returnValue += request.date.toISOString()
    return returnValue
  }

  getRequestProgress(request: Request): number {
    let requestProgressValue = 0
    requestProgressValue += request.importerCompany ? 20 : 0
    requestProgressValue += request.requestedMaterial ? 20 : 0
    requestProgressValue += request.finalClient ? 20 : 0
    requestProgressValue += request.unit ? 20 : 0
    requestProgressValue += request.quantity != 0 ? 20 : 0
    return requestProgressValue
  }

  offerAction(business: BusinessOportunity): void {

    if (business.offer) {
      let offer = business.offer
      switch (business.offer?.status.status) {
        case OStatus.Created: {
          offer.status.status = OStatus.Approved
          break;
        }
        case OStatus.Approved: {
          offer.status.status = OStatus.Send
          break;
        }
        case OStatus.Send: {
          const dialogRef = this.offerCloseDialog.open(OfferCloseDialogComponent, {
            hasBackdrop: true,
            disableClose: true,
            data: {
              offerStatus: business.offer.status.status,
              rejectedReason: business.offer.rejectedReason
            }
          })
          dialogRef.afterClosed().subscribe(data => {
            offer.status.status = data.offerStatus
            offer.rejectedReason = data.rejectedReason
          });
          break;
        }
        case OStatus.Accepted: {
          business.offer.status.status = OStatus.Send
          break
        }
        case OStatus.Rejected: {
          business.offer.status.status = OStatus.Send
        }
      }
    }

  }

  SaveRequest(request: Request) {
    console.log(request)
  }

}
