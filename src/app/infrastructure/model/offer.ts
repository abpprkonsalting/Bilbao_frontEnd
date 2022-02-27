import { OfferStatus } from "./statuses/offer-status";
import { Currency } from "../enums/currency";
import { PaymentMethod } from "../enums/payment-method";
import { RejectedReason } from "../enums/rejected-reason";
import { OportunityPart } from "./oportunity-part";

export class Offer extends OportunityPart {
  amountFob: number = 0
  amountTotal: number = 0;
  currency: Currency = Currency.Euro;
  validUntil: Date = new Date(Date.now() + 10);
  status: OfferStatus = new OfferStatus();
  rejectedReason: RejectedReason = RejectedReason.Unknown;
  paymentMethod: PaymentMethod = PaymentMethod.A_convenir;
  override type: string = "Offer";
}
