import { Pipe, PipeTransform } from '@angular/core';
import { CStatus } from '../enums/contract-status';
import { ContractStatus } from '../model/statuses/contract-status';
import { User } from '../model/user';


@Pipe({
  name: 'contractAction',
  pure: false
})
export class ContractActionPipe implements PipeTransform {

  transform(contractStatus: ContractStatus, user: User): string {
    switch (contractStatus.status) {
      case CStatus.Created: {
        return "Send"
      }
      case CStatus.Send: {
        return "Client Signed"
      }
      case CStatus.Signed: {
        return "On Transit"
      }
      case CStatus.OnTransit: {
        return "Delivered"
      }
      case CStatus.Delivered: {
        return "Client Received"
      }
      case CStatus.ClientReceived: {
        return "Client Accepted"
      }
      case CStatus.ClientAccepted: {
        return "Client Paid"
      }
    }
    return "";
  }

}
