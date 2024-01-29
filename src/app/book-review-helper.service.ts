import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookReviewHelperService {

  constructor() { }
  public UppercaseBookReview(bookReview:string):string{
    return bookReview.toLocaleUpperCase();
  }
}
