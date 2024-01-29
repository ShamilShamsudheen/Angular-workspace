import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookHelperService } from '../book-helper.service';

@Component({
  selector: 'app-book-retail',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './book-retail.component.html',
  styleUrl: './book-retail.component.css'
})
export class BookRetailComponent implements OnInit{

  public bookSummary!: string;
  public bookRetailDetails: any = []
  public authorBooks: Array<string> = [];

  @Input('title') title!: string;
  @Input('subTitle') subTitle!: string;
  @Output('selectedBook') selectedBook = new EventEmitter<string>()

  constructor(
    private readonly bookHelperService: BookHelperService
  ){}

  public ngOnInit(): void {
    this.bookRetailDetails = this.bookHelperService.getBookDetails();
  }

  public showBooks(index: number): void{
    this.bookSummary = this.bookHelperService.bookSummary;
    const authorBooks = this.bookRetailDetails[index].books;
    this.authorBooks = this.bookHelperService.upperCaseBooks(authorBooks);
  }

  public selectBook(index: number) {
    const book = this.authorBooks[index];
    this.selectedBook.emit(book);
  }
}
