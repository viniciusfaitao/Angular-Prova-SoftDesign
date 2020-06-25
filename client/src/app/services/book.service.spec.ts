import { TestBed } from '@angular/core/testing';
import { BooksService } from './book.service';

describe('BooksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BooksService = TestBed.inject(BooksService);
    expect(service).toBeTruthy();
  });
});
