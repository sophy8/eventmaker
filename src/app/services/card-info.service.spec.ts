import { TestBed } from '@angular/core/testing';

import { CardInfoService } from './card-info.service';

describe('CardInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardInfoService = TestBed.get(CardInfoService);
    expect(service).toBeTruthy();
  });
});
