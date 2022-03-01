import { Pipe, PipeTransform } from '@angular/core';
import { OfferStatus } from '../model/statuses/offer-status';
import { OStatus } from '../enums/offer-status';

@Pipe({
  name: 'offerProgress'
})
export class OfferProgressPipe implements PipeTransform {

  transform(offerStatus: OfferStatus): number {
    switch (offerStatus.status) {
      case OStatus.Created: {
        return 25;
      }
      case OStatus.HeadQuartersApproved: {
        return 50;
      }
      case OStatus.SendToClient: {
        return 75;
      }
      case OStatus.ClientAccepted: {
        return 100;
      }
      case OStatus.ClientRejected: {
        return 100;
      }
    }
  }
}
