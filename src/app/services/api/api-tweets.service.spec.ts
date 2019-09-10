import { TestBed } from '@angular/core/testing';

import { ApiTweetsService } from './api-tweets.service';

describe('ApiTweetsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiTweetsService = TestBed.get(ApiTweetsService);
    expect(service).toBeTruthy();
  });
});
