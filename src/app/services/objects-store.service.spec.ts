import { TestBed } from '@angular/core/testing';

import { ObjectsStoreService } from './objects-store.service';

describe('ObjectsStoreService', () => {
  let service: ObjectsStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjectsStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
