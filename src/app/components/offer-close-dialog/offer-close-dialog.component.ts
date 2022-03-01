import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-offer-close-dialog',
  templateUrl: './offer-close-dialog.component.html',
  styleUrls: ['./offer-close-dialog.component.less']
})
export class OfferCloseDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<OfferCloseDialogComponent>) { }

  ngOnInit(): void {
  }

}
