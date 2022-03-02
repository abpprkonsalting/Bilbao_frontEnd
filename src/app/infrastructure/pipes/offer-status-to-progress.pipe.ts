import { Pipe, PipeTransform } from '@angular/core';
import { OfferStatus } from '../model/statuses/offer-status';
import { OStatus } from '../enums/offer-status';

@Pipe({
  name: 'offerProgress',
  pure: false
})
export class OfferProgressPipe implements PipeTransform {

  transform(offerStatus: OfferStatus): number {
    switch (offerStatus.status) {
      case OStatus.Created: {
        return 25;
      }
      case OStatus.Approved: {
        return 50;
      }
      case OStatus.Send: {
        return 75;
      }
      case OStatus.Accepted: {
        return 100;
      }
      case OStatus.Rejected: {
        return 100;
      }
    }
  }
}
