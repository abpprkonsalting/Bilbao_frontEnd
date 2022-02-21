import { Currency } from "../enums/currency";
import { DeliveryConditions } from "../enums/delivery-conditions";
import { ContractStatus } from "./statuses/contract-status";

export class Contract {
  id: number = 0;
  amount: number = 0;
  currency: Currency = Currency.Euro;
  deliveryConditions: DeliveryConditions = DeliveryConditions.CFR;
  status: ContractStatus = new ContractStatus();
}
