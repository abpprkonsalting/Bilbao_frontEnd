import { Request } from "./request";
import { Offer } from "./offer"
import { Contract } from "./contract";

export class BusinessOportunity {
  id: number = 0;
  request: Request = new Request();
  offer: Offer = new Offer();
  contract: Contract = new Contract();
}
