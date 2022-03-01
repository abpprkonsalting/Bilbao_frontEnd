import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferCloseDialogComponent } from './offer-close-dialog.component';

describe('OfferCloseDialogComponent', () => {
  let component: OfferCloseDialogComponent;
  let fixture: ComponentFixture<OfferCloseDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferCloseDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferCloseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
