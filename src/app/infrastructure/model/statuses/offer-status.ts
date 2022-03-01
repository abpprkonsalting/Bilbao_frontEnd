import { OStatus } from "../../enums/offer-status";

export class OfferStatus {
  status: OStatus = OStatus.SendToClient;
  date: Date = new Date(Date.now());
}
