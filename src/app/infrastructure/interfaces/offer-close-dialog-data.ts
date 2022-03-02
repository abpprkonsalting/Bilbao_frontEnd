import { OStatus } from '../enums/offer-status';
import { RejectedReason } from '../enums/rejected-reason'

export interface OfferCloseDialogData {
  rejectedReason: RejectedReason,
  offerStatus: OStatus
}
