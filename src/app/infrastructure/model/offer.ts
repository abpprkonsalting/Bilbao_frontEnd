import { OfferStatus } from "./statuses/offer-status";
import { OStatus } from "../enums/offer-status";
import { Currency } from "../enums/currency";
import { PaymentMethod } from "../enums/payment-method";
import { RejectedReason } from "../enums/rejected-reason";
import { OportunityPart } from "./oportunity-part";

export class Offer extends OportunityPart {
  amountFob: number = 0
  amountTotal: number = 0;
  currency: Currency = Currency.Euro;
  paymentMethod: PaymentMethod = PaymentMethod.A_convenir;
  status: OfferStatus = new OfferStatus();
  rejectedReason?: RejectedReason = RejectedReason.Unknown;
  override type: string = "Offer";
}
