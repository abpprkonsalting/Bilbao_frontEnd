import { Request } from "./request";
import { Offer } from "./offer"
import { Contract } from "./contract";

export class BusinessOportunity {
  id: number = 0;
  request: Request = new Request();
  offer?: Offer;
  contract?: Contract;

  // constructor() {
  //   this.id = 0;
  //   this.request = new Request();
  // }
}
