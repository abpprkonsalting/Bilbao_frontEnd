import { Component, Input, OnInit } from '@angular/core';
import { BusinessOportunity } from 'src/app/infrastructure/model/business-oportunity'
import { OportunityPart } from 'src/app/infrastructure/model/oportunity-part';
import { Request } from 'src/app/infrastructure/model/request';
import { Offer } from 'src/app/infrastructure/model/offer';
import { Contract } from 'src/app/infrastructure/model/contract';

@Component({
  selector: 'oportunities-parts-repo',
  templateUrl: './oportunities-parts-repo.component.html',
  styleUrls: ['./oportunities-parts-repo.component.less']
})
export class OportunitiesPartsRepoComponent implements OnInit {
  @Input() dropListArray: string[]
  oportunities: BusinessOportunity[] = []
  parts: any[] = []

  constructor() {
    this.dropListArray = ['list-0'];
    this.parts.push(new BusinessOportunity())
    this.parts.push(new Offer())
    this.parts.push(new Contract())
  }

  ngOnInit(): void {
  }

}
