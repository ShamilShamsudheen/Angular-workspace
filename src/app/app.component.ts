import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  public bookTitle: string = 'Book List';
  public selectedBook: string = '';
  /**
   * 
   * @param selectedBook string
   */
  public showSelectedBook(selectedBook: string) {
    this.selectedBook = selectedBook;
   }
}
