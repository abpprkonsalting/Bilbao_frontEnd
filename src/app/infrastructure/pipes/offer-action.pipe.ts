import { Pipe, PipeTransform } from '@angular/core';
import { OStatus } from '../enums/offer-status';
import { OfferStatus } from '../model/statuses/offer-status';
import { User } from '../model/user';

@Pipe({
  name: 'offerAction',
  pure: false
})
export class OfferActionPipe implements PipeTransform {

  transform(offerStatus: OfferStatus, user: User): string {
    switch (offerStatus.status) {
      case OStatus.Created: {
        if (user.roles.some(entry => entry === 'ADMIN')) {
          return "Approve"
        }
        return ""
      }
      case OStatus.Approved: {
        return "Send"
      }
      case OStatus.Send: {
        return "Close"
      }
      case OStatus.Accepted: {
        return "Re-open"
      }
      case OStatus.Rejected: {
        return "Re-open"
      }

    }
    return "";
  }

}
