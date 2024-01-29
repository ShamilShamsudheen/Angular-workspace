import { Injectable } from '@angular/core';

@Injectable()
export class BookHelperService {

  public bookSummary: string = `This is the book's summary`;

  constructor() { }

  public upperCaseBooks(books: Array<string>): Array<string>{
    return books.map(book => book.toUpperCase());
  }

  public getBookDetails() {
    return  [
      {
        name: 'JK Rowling',
        books: [
          'Philosopher Stone', 'Chamber of secrets', 'Prisoner of Azkaban', 'Goblet of Fire', 'Order of Phoenix'
        ]
      },
      {
        name: 'Adarsh R',
        books: [
          'Circe', 'When breath become air', 'Ikigai', 'Percy Jackson', 'Sapiens'
        ]
      },
      {
        name: 'Nevin George',
        books: [
          'Homo Deus', 'Clean code', 'Head First', 'Clean architecture', 'Intro to OOPs'
        ]
      },
      {
        name: 'Meenu',
        books: [
          'Balarama', 'Magic Pot', 'Kalikuduka', 'Balabhoomi', 'Tell Me Why'
        ]
      },
      {
        name: 'Aravind',
        books: [
          'Bobbanum Molly', 'Shupaandi Stories', 'Twinkle', 'Barbie', 'Bahubali'
        ]
      },
      {
        name: 'Vishnu',
        books: [
          'Half Blood Prince', 'Deathly Hallows', 'Ram c/o Aanandi', 'Aadujeevitham', 'Tommorow tommorow'
        ]
      }
    ];
  }
}
