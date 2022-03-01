import { OfferProgressPipe } from './offer-status-to-progress.pipe';

describe('OfferStatusToProgressPipe', () => {
  it('create an instance', () => {
    const pipe = new OfferProgressPipe();
    expect(pipe).toBeTruthy();
  });
});
