import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { RejectedReason } from "../../infrastructure/enums/rejected-reason"
import { OStatus } from 'src/app/infrastructure/enums/offer-status';
import { OfferCloseDialogData } from '../../infrastructure/interfaces/offer-close-dialog-data'

@Component({
  selector: 'app-offer-close-dialog',
  templateUrl: './offer-close-dialog.component.html',
  styleUrls: ['./offer-close-dialog.component.less']
})
export class OfferCloseDialogComponent implements OnInit {

  rejectedReasons = RejectedReason
  rejectedReasonsKeys: any = []
  selectedReason = RejectedReason.Unknown
  selectedValue: String[] = ["accepted"]

  constructor(public dialogRef: MatDialogRef<OfferCloseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: OfferCloseDialogData) {
    this.rejectedReasonsKeys = Object.keys(this.rejectedReasons).filter(f => !isNaN(Number(f)));
  }

  ngOnInit(): void {
  }

  selectionChanged(item: any) {

    //console.log("Selected value: " + item.value);
    if (item.value == "accepted") {
      this.data.offerStatus = OStatus.Accepted
      this.data.rejectedReason = this.selectedReason
      this.dialogRef.close(this.data);
    }
  }

  selectedReasonChanged(item: any): void {
    this.data.offerStatus = OStatus.Rejected
    this.data.rejectedReason = this.selectedReason
    this.dialogRef.close(this.data);
  }
}
