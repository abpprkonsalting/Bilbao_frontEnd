import { Pipe, PipeTransform } from '@angular/core';
import { ContractStatus } from '../model/statuses/contract-status';
import { CStatus } from '../enums/contract-status';

@Pipe({
  name: 'contractProgress',
  pure: false
})
export class ContractProgressPipe implements PipeTransform {

  transform(contractStatus: ContractStatus,): number {
    switch (contractStatus.status) {
      case CStatus.Created: {
        return 12.5;
      }
      case CStatus.Send: {
        return 25;
      }
      case CStatus.Signed: {
        return 37.5;
      }
      case CStatus.OnTransit: {
        return 50;
      }
      case CStatus.Delivered: {
        return 62.5;
      }
      case CStatus.ClientReceived: {
        return 75;
      }
      case CStatus.ClientAccepted: {
        return 87.5;
      }
      case CStatus.ClientPaid: {
        return 100;
      }
    }
  }

}
