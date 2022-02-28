import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { BusinessOportunity } from 'src/app/infrastructure/model/business-oportunity';
import { Request } from 'src/app/infrastructure/model/request'
import { Offer } from 'src/app/infrastructure/model/offer';
import { Contract } from 'src/app/infrastructure/model/contract';
import { OportunityPart } from 'src/app/infrastructure/model/oportunity-part';
import { ImporterCompany } from "../../infrastructure/enums/importer-company";
import { Material } from "../../infrastructure/enums/material"
import { FinalClient } from 'src/app/infrastructure/enums/final-client';
import { Unit } from 'src/app/infrastructure/enums/unit';

@Component({
  selector: 'oportunities-list',
  templateUrl: './oportunities-list.component.html',
  styleUrls: ['./oportunities-list.component.less']
})
export class OportunitiesListComponent implements OnInit {

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

  requestProgressValue: number = 0

  @Output() itemDrop: EventEmitter<CdkDragDrop<BusinessOportunity[]>>

  constructor() {
    this.importerCompaniesKeys = Object.keys(this.importerCompanies).filter(f => !isNaN(Number(f)));
    this.requestedMaterialKeys = Object.keys(this.requestedMaterials).filter(f => !isNaN(Number(f)));
    this.finalClientsKeys = Object.keys(this.finalClients).filter(f => !isNaN(Number(f)));
    this.unitsKeys = Object.keys(this.units).filter(f => !isNaN(Number(f)));
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
      this.canRequestBeMade(oportunity)) {
      oportunity.offer = new Offer();
    }
    else if (event.item.data.type == "Contract" &&
      oportunity.offer != undefined &&
      this.canContractBeMade(oportunity)) {
      oportunity.contract = new Contract()
    }
  }

  canRequestBeMade(oportunity: BusinessOportunity): boolean {
    if (oportunity.offer == undefined) return true
    return false;
  }

  canContractBeMade(oportunity: BusinessOportunity): boolean {
    if (oportunity.offer != undefined && oportunity.contract == undefined) return true
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
    this.requestProgressValue = 0
    this.requestProgressValue += request.importerCompany ? 20 : 0
    this.requestProgressValue += request.requestedMaterial ? 20 : 0
    this.requestProgressValue += request.finalClient ? 20 : 0
    this.requestProgressValue += request.unit ? 20 : 0
    this.requestProgressValue += request.quantity != 0 ? 20 : 0
    return this.requestProgressValue
  }

  SaveRequest(request: Request) {
    console.log(request)
  }

}
