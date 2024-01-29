import { TestBed } from '@angular/core/testing';

import { BookReviewHelperService } from './book-review-helper.service';

describe('BookReviewHelperService', () => {
  let service: BookReviewHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookReviewHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
