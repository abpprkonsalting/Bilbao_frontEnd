import { CStatus } from "../../enums/contract-status";

export class ContractStatus {
  status: CStatus = CStatus.Created;
  date: Date = new Date(Date.now());
}
